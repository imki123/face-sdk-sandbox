import { Face, FaceConfig } from "@haechi-labs/face-sdk";
import { Network } from "@haechi-labs/face-types";
import { useEffect, useState } from "react";
import { isMainnet } from "./utils/utils";

const apiKeyProdTestnet =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp8heU-9JkwW1SzdE0oSrlgWgtrv-LIT_ZqitDEDIAjH3wpe9ePspioUYO1Sp_gXqgaZoEa8_CiKCdOslgJm0tdLV69eG9uyQjrSNiRzI8IH_OdNTOE5Eq_5lUpBYP56xt8Z-YtZOCL1YzYjA2DrX7IQGDxChwIC9n24HNNQw5PQIDAQAB";
const apiKeyProdMainnet =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdVn4mIpLD6ajlCIRPfiP_EH41rcpgkd5WEba9t46sOgeZPW6sK5qkndZfBnLrS2I7LnlBRZT5O8NjqeIqJOxACG57-iZ8esZ0hTfyqswX0N7gSDxkfNx0Fx0nnvaHk-owJnwb3xtdp3Zsv_FXneXJBHiQlEBPBEpUvsdICJv3CQIDAQAB";

export function App() {
  const [face, setFace] = useState<Face | undefined>(undefined);
  const [network, setNetwork] = useState(Network.ETHEREUM);
  const [apiKey, setApiKey] = useState(apiKeyProdMainnet);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const faceConfig: FaceConfig = {
    apiKey: apiKey,
    network,
    notificationOptions: undefined,
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
        <legend>Select Network</legend>
        <select
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
                  apiKey: isMainnet(network)
                    ? apiKeyProdMainnet
                    : apiKeyProdTestnet,
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
        <legend>Transaction ERC20</legend>
        {!face ? (
          <div style={{ color: "red" }}>Face is not initialized</div>
        ) : !isLoggedIn ? (
          <div style={{ color: "red" }}>Face is not logged in</div>
        ) : (
          <button onClick={() => {}}>Transaction ERC20</button>
        )}
      </fieldset>
    </>
  );
}
