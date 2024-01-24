import { Face, FaceConfig } from "@haechi-labs/face-sdk";
import { Network, Env } from "@haechi-labs/face-types";
import { useEffect, useState } from "react";
import { IFRAME_URL } from "./utils/utils";
import { ethers, providers, utils } from "ethers";

export function App() {
  const [face, setFace] = useState<Face | undefined>(undefined);
  const [network, setNetwork] = useState(Network.MUMBAI);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const defaultEnv = Env.StageTest;
  const [env, setEnv] = useState<Env>(defaultEnv);
  const [apiKey, setApiKey] = useState(configs[env].apiKey);

  const faceConfig: FaceConfig & { iframeUrl?: string; env: Env } = {
    apiKey,
    network,
    notificationOptions: undefined,
    iframeUrl: configs[env].iframeUrl,
    env,
  };

  useEffect(() => {
    async function checkLoggedIn() {
      if (face) {
        if (await face.auth.isLoggedIn()) {
          console.log("logged in");
          setIsLoggedIn(true);
        } else {
          console.log("not logged in");
          setIsLoggedIn(false);
        }
      }
    }
    checkLoggedIn();
  }, [face]);

  return (
    <>
      <h1>Face SDK</h1>

      <fieldset>
        <legend>Select Env</legend>
        <select
          defaultValue={defaultEnv}
          onChange={(e) => {
            const env = e.target.value as Env;
            setApiKey(configs[env].apiKey);
            setEnv(env);
            faceConfig.iframeUrl = configs[env].iframeUrl;
          }}
        >
          {Object.values(Env).map((env, index) => (
            <option key={env + index} value={env}>
              {env}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Select Network</legend>
        <select
          defaultValue={Network.MUMBAI}
          onChange={async (e) => {
            const network = e.target.value as Network;
            setNetwork(network);
            if (face) {
              // face 제거
              document.getElementById("face-iframe")?.remove();
              try {
                const _face = new Face({
                  ...faceConfig,
                  network,
                  apiKey: configs[env].apiKey,
                });
                console.log(_face);
                setFace(_face);
                setNetwork(_face.getNetwork());
                setApiKey;
              } catch (error) {
                setNetwork("Error" as Network);
              }
            }
          }}
        >
          {Object.values(Network).map((network, index) => (
            <option key={network + index} value={network}>
              {network}
            </option>
          ))}
        </select>

        <button
          onClick={async () => {
            if (face) {
              alert("Face is already initialized");
            } else {
              const _face = new Face(faceConfig);
              console.log(_face);
              setFace(_face);
            }
          }}
        >
          Init Face
        </button>

        {!face ? (
          <div style={{ color: "red" }}>Face is not initialized</div>
        ) : (
          <div style={{ color: "blue" }}>getNetwork: {network}</div>
        )}
      </fieldset>

      <fieldset>
        <legend>Login Face</legend>
        {!face ? (
          <div style={{ color: "red" }}>Face is not initialized</div>
        ) : !isLoggedIn ? (
          <button
            onClick={async () => {
              const loginResult = await face.auth.login();
              console.log(loginResult);
              if (await face.auth.isLoggedIn()) {
                setIsLoggedIn(true);
              } else {
                setIsLoggedIn(false);
              }
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={async () => {
              const logoutResult = await face.auth.logout();
              console.log(logoutResult);
              if (await face.auth.isLoggedIn()) {
                setIsLoggedIn(true);
              } else {
                setIsLoggedIn(false);
              }
            }}
          >
            Logout
          </button>
        )}
      </fieldset>

      <fieldset>
        <legend>Open Iframe Home</legend>
        {!face ? (
          <div style={{ color: "red" }}>Face is not initialized</div>
        ) : !isLoggedIn ? (
          <div style={{ color: "red" }}>Face is not logged in</div>
        ) : (
          <button onClick={() => face.wallet.home()}>Open Home</button>
        )}
      </fieldset>

      <fieldset>
        <legend>Transaction ERC20 Token</legend>
        {!face ? (
          <div style={{ color: "red" }}>Face is not initialized</div>
        ) : !isLoggedIn ? (
          <div style={{ color: "red" }}>Face is not logged in</div>
        ) : (
          <>
            <div>
              <div>
                contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
              </div>
              <div>
                receiverAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
              </div>
              <div>amount: "1"</div>
              <div>decimal: "18"</div>
            </div>
            <button
              onClick={() =>
                signMessage({
                  contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                  receiverAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                  amount: "1",
                  decimal: "18",
                })
              }
            >
              Transaction ERC20 Token
            </button>
          </>
        )}
      </fieldset>
    </>
  );

  async function signMessage({
    contractAddress,
    receiverAddress,
    amount,
    decimal,
  }: {
    contractAddress: string;
    receiverAddress: string;
    amount: string;
    decimal: string;
  }) {
    const provider = new providers.Web3Provider(
      face!.getEthLikeProvider(),
      "any"
    );

    const signer = provider.getSigner();

    function makeErc20Data(
      functionFragment: string,
      to: string,
      value: ethers.BigNumber
    ) {
      const ethersInterface = new ethers.utils.Interface(ERC20_ABI);
      return ethersInterface.encodeFunctionData(functionFragment, [to, value]);
    }

    const transactionResponse = await signer.sendTransaction({
      to: contractAddress,
      value: "0x00",
      data: makeErc20Data(
        "transfer",
        receiverAddress,
        utils.parseUnits(amount, Number(decimal))
      ),
    });

    console.group("[Transaction Information]");
    console.log("Transaction response:", transactionResponse);
    console.log("Hash:", transactionResponse.hash);

    const receipt = await transactionResponse.wait();
    console.log("Transaction receipt", receipt);
    console.groupEnd();
  }
}

const ERC20_TRANSFER_ABI = [
  "function transfer(address to, uint256 value) public returns (bool success)",
];
const ERC20_ABI = [
  ...ERC20_TRANSFER_ABI,
  "function balanceOf(address account) view returns (uint256 balance)",
  "function approve(address _spender, uint256 _value) public returns (bool success)",
  "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",
];

const configs = {
  [Env.Local]: {
    apiKey: "Choose your local api key",
    iframeUrl: IFRAME_URL.Local,
  },
  [Env.Dev]: {
    apiKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZNotniFjZdpvDllzdS77MrAgsYnvLtXJq6hem5XeCL9ZfQQzEwMJoadXUJuRQbZHFexJaPvynMD3ufvxKKEfxWR-8j6YCIbSh8MLhypfL7FEtLsQAck-T4jiptiMVxuPhrDRmGgzC2Sik_qi0SiXXUebsPULgQyS85nPhtQ5lNwIDAQAB",
    iframeUrl: IFRAME_URL.Dev,
  },
  [Env.StageTest]: {
    apiKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7JH8fYVhw7wxnIhmZmKZySCqjyVrfaq6hMze78bsGY-FV3q_5_4cwcwRkQbjdLQx5Cb7wh93y1i_at5mKDL_R0DrXA_XY3WwllIq3yh5kLi2Lg43zZNFx6GCGOkgz_ImP8a_pg40rAnCm2FKfoRXsAixQXWcDXXX00C4q018yFwIDAQAB",
    iframeUrl: IFRAME_URL.StageTestnet,
  },
  [Env.StageMainnet]: {
    apiKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7JH8fYVhw7wxnIhmZmKZySCqjyVrfaq6hMze78bsGY-FV3q_5_4cwcwRkQbjdLQx5Cb7wh93y1i_at5mKDL_R0DrXA_XY3WwllIq3yh5kLi2Lg43zZNFx6GCGOkgz_ImP8a_pg40rAnCm2FKfoRXsAixQXWcDXXX00C4q018yFwIDAQAB",
    iframeUrl: IFRAME_URL.StageTestnet,
  },
  [Env.ProdTest]: {
    apiKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp8heU-9JkwW1SzdE0oSrlgWgtrv-LIT_ZqitDEDIAjH3wpe9ePspioUYO1Sp_gXqgaZoEa8_CiKCdOslgJm0tdLV69eG9uyQjrSNiRzI8IH_OdNTOE5Eq_5lUpBYP56xt8Z-YtZOCL1YzYjA2DrX7IQGDxChwIC9n24HNNQw5PQIDAQAB",
    iframeUrl: IFRAME_URL.ProdTestnet,
  },
  [Env.ProdMainnet]: {
    apiKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdVn4mIpLD6ajlCIRPfiP_EH41rcpgkd5WEba9t46sOgeZPW6sK5qkndZfBnLrS2I7LnlBRZT5O8NjqeIqJOxACG57-iZ8esZ0hTfyqswX0N7gSDxkfNx0Fx0nnvaHk-owJnwb3xtdp3Zsv_FXneXJBHiQlEBPBEpUvsdICJv3CQIDAQAB",
    iframeUrl: IFRAME_URL.ProdMainnet,
  },
};
