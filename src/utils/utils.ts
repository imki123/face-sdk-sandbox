import { Blockchain, Network } from "@haechi-labs/face-types";

export type SupportPlatform = "in-app" | "standalone" | "react-native";

const PUBLIC_STORAGE_URL =
  "https://storage.googleapis.com/bkt-t-face-common-asset/networks/";
export const BLOCKCHAIN_INFO_MAP: {
  [key in Blockchain]: {
    name: string;
    image: string;
    platformCoinCode: string;
    isEthlike: boolean;
    decimal: number;
  };
} = {
  [Blockchain.ETHEREUM]: {
    name: "Ethereum",
    image: PUBLIC_STORAGE_URL + "ETHEREUM.png",
    platformCoinCode: "ETH",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.POLYGON]: {
    name: "Polygon",
    image: PUBLIC_STORAGE_URL + "POLYGON.png",
    platformCoinCode: "MATIC",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.KLAYTN]: {
    name: "Klaytn",
    image: PUBLIC_STORAGE_URL + "KLAYTN.png",
    platformCoinCode: "KLAY",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.TEZOS]: {
    name: "Tezos",
    image: PUBLIC_STORAGE_URL + "XTZ.png",
    platformCoinCode: "XTZ",
    isEthlike: false,
    decimal: 6,
  },
  [Blockchain.BNB_SMART_CHAIN]: {
    name: "BNB Smart Chain",
    image: PUBLIC_STORAGE_URL + "BNB_SMART_CHAIN.png",
    platformCoinCode: "BNB",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.BORA]: {
    name: "BORA",
    image: PUBLIC_STORAGE_URL + "BORA.png",
    platformCoinCode: "BORA",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.SOLANA]: {
    name: "Solana",
    image: PUBLIC_STORAGE_URL + "SOLANA.png",
    platformCoinCode: "SOL",
    isEthlike: false,
    decimal: 9,
  },
  [Blockchain.NEAR]: {
    name: "Near",
    image: PUBLIC_STORAGE_URL + "NEAR.png",
    platformCoinCode: "NEAR",
    isEthlike: false,
    decimal: 24,
  },
  [Blockchain.APTOS]: {
    name: "Aptos",
    image: PUBLIC_STORAGE_URL + "APTOS.png",
    platformCoinCode: "APTOS",
    isEthlike: false,
    decimal: 8,
  },
  [Blockchain.MEVERSE]: {
    name: "MEVerse",
    image: PUBLIC_STORAGE_URL + "MEVERSE.png",
    platformCoinCode: "MEV",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.PSM]: {
    name: "PSM",
    image: PUBLIC_STORAGE_URL + "PSM.png",
    platformCoinCode: "PSM",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.PSM_TEST]: {
    name: "PSM",
    image: PUBLIC_STORAGE_URL + "PSM.png",
    platformCoinCode: "PSM",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.PSM_DEV]: {
    name: "PSM",
    image: PUBLIC_STORAGE_URL + "PSM.png",
    platformCoinCode: "PSM",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.HOME_VERSE]: {
    name: "HOME Verse",
    image: PUBLIC_STORAGE_URL + "HOMEVERSE.png",
    platformCoinCode: "HOME",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.YOOLDO_VERSE]: {
    name: "Yooldo Verse",
    image: PUBLIC_STORAGE_URL + "YOOLDOVERSE.png",
    platformCoinCode: "YV",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.OASYS]: {
    name: "Oasys",
    image: PUBLIC_STORAGE_URL + "OASYS.png",
    platformCoinCode: "OAS",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.MCH_VERSE]: {
    name: "MCH Verse",
    image: PUBLIC_STORAGE_URL + "MCHVerse.png",
    platformCoinCode: "MCH",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.HEDERA]: {
    name: "Hedera",
    image: PUBLIC_STORAGE_URL + "HBAR.png",
    platformCoinCode: "HBAR",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.DEFI_VERSE]: {
    name: "DeFi Verse",
    image: PUBLIC_STORAGE_URL + "DeFiVerse.png",
    platformCoinCode: "OAS",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.KROMA]: {
    name: "Kroma",
    image: PUBLIC_STORAGE_URL + "KRO.png",
    platformCoinCode: "ETH",
    isEthlike: true,
    decimal: 18,
  },

  // TODO: add ASM icon
  // [Blockchain.ASM]: {
  //   name: 'ASM',
  //   image: PUBLIC_STORAGE_URL + 'ASM.png',
  //   platformCoinCode: 'ASM',
  //   decimal: 18,
  // },
  [Blockchain.ASM_QA]: {
    name: "ASM",
    image: PUBLIC_STORAGE_URL + "ASM.png",
    platformCoinCode: "ASM",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.ASM_TEST]: {
    name: "ASM",
    image: PUBLIC_STORAGE_URL + "ASM.png",
    platformCoinCode: "ASM",
    isEthlike: true,
    decimal: 18,
  },
  [Blockchain.ASM_DEV]: {
    name: "ASM",
    image: PUBLIC_STORAGE_URL + "ASM.png",
    platformCoinCode: "ASM",
    isEthlike: true,
    decimal: 18,
  },
};

interface NetworkConfig {
  chainId: number;
  blockchain: Blockchain;
  network: Network;
  name: string;
  isEthlike: boolean;
  isMainnet: boolean;
  isSupported: SupportPlatform[];
  isSupportedNft: boolean;
  isSupportedHome: boolean;
  openWalletConnect: boolean;
  // explorerUrl 형식이 `{url}/{tx|address}/{value} 형태라면 string 형태로 url만 넣어주어도 된다.`
  explorerUrl: string | ((value: string, type: "tx" | "address") => string);
  providerUrl: string | null;
}

export const networkConfigs: NetworkConfig[] = [
  {
    chainId: 1,
    blockchain: Blockchain.ETHEREUM,
    network: Network.ETHEREUM,
    name: "Ethereum",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://etherscan.io",
    providerUrl: "https://mainnet.infura.io/v3/",
  },
  {
    chainId: 11155111,
    blockchain: Blockchain.ETHEREUM,
    network: Network.SEPOLIA,
    name: "Sepolia",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://sepolia.etherscan.io",
    providerUrl: "https://rpc.sepolia.org",
  },
  {
    chainId: 137,
    blockchain: Blockchain.POLYGON,
    network: Network.POLYGON,
    name: "Polygon",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://polygonscan.com",
    providerUrl: "https://polygon-rpc.com/",
  },
  {
    chainId: 80001,
    blockchain: Blockchain.POLYGON,
    network: Network.MUMBAI,
    name: "Mumbai",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://mumbai.polygonscan.com",
    providerUrl: "https://matic-mumbai.chainstacklabs.com",
  },
  {
    chainId: 9999999,
    blockchain: Blockchain.TEZOS,
    network: Network.TEZOS,
    name: "Tezos",
    isEthlike: false,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: false,
    openWalletConnect: false,
    explorerUrl: "https://tzkt.io",
    providerUrl: "https://rpc.tzkt.io/mainnet/",
  },
  {
    chainId: 9999998,
    blockchain: Blockchain.TEZOS,
    network: Network.GHOSTNET,
    name: "Ghostnet",
    isEthlike: false,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: false,
    openWalletConnect: true,
    explorerUrl: "https://ghostnet.tzkt.io",
    providerUrl: "https://rpc.tzkt.io/ghostnet/",
  },
  {
    chainId: 56,
    blockchain: Blockchain.BNB_SMART_CHAIN,
    network: Network.BNB_SMART_CHAIN,
    name: "BNB Smart Chain",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://bscscan.com",
    providerUrl: "https://bsc-dataseed.binance.org/",
  },
  {
    chainId: 97,
    blockchain: Blockchain.BNB_SMART_CHAIN,
    network: Network.BNB_SMART_CHAIN_TESTNET,
    name: "BNB Smart Chain Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://testnet.bscscan.com",
    providerUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  {
    chainId: 8217,
    blockchain: Blockchain.KLAYTN,
    network: Network.KLAYTN,
    name: "Klaytn",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://www.klaytnfinder.io",
    providerUrl: "https://public-node-api.klaytnapi.com/v1/cypress",
  },
  {
    chainId: 1001,
    blockchain: Blockchain.KLAYTN,
    network: Network.BAOBAB,
    name: "Baobab",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://baobab.klaytnfinder.io",
    providerUrl: "https://api.baobab.klaytn.net:8651/",
  },
  {
    chainId: 0,
    blockchain: Blockchain.SOLANA,
    network: Network.SOLANA,
    name: "Solana",
    isEthlike: false,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: false,
    openWalletConnect: false,
    explorerUrl: "https://explorer.solana.com",
    providerUrl: "https://api.mainnet-beta.solana.com",
  },
  {
    chainId: 0,
    blockchain: Blockchain.SOLANA,
    network: Network.SOLANA_DEVNET,
    name: "Solana Devnet",
    isEthlike: false,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: false,
    openWalletConnect: false,
    explorerUrl: (value, type) => {
      return `https://explorer.solana.com/${type}/${value}?cluster=devnet`;
    },
    providerUrl: "https://api.devnet.solana.com",
  },
  {
    chainId: 0,
    blockchain: Blockchain.NEAR,
    network: Network.NEAR,
    name: "Near",
    isEthlike: false,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: false,
    openWalletConnect: false,
    explorerUrl: (value, type) => {
      if (type === "tx")
        return `https://explorer.near.org/transactions/${value}`;
      return `https://explorer.near.org/accounts/${value}`;
    },
    providerUrl: "https://rpc.mainnet.near.org",
  },
  {
    chainId: 0,
    blockchain: Blockchain.NEAR,
    network: Network.NEAR_TESTNET,
    name: "Near Testnet",
    isEthlike: false,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: false,
    openWalletConnect: false,
    explorerUrl: (value, type) => {
      if (type === "tx")
        return `https://explorer.testnet.near.org/transactions/${value}`;
      return `https://explorer.testnet.near.org/accounts/${value}`;
    },
    providerUrl: "https://rpc.testnet.near.org",
  },
  {
    chainId: 77001,
    blockchain: Blockchain.BORA,
    network: Network.BORA,
    name: "BORA",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scope.boraportal.com",
    providerUrl: "https://bora-mainnet.haechi.io",
  },
  {
    chainId: 99001,
    blockchain: Blockchain.BORA,
    network: Network.BORA_TESTNET,
    name: "BORA Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone", "react-native"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scope.boraportal.com",
    providerUrl: "https://bora-testnet.haechi.io",
  },
  {
    chainId: 1,
    blockchain: Blockchain.APTOS,
    network: Network.APTOS,
    name: "Aptos",
    isEthlike: false,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: false,
    explorerUrl: (value, type) => {
      if (type === "tx") return `https://explorer.aptoslabs.com/txn/${value}`;
      return `https://explorer.aptoslabs.com/address/${value}`;
    },
    providerUrl: "https://fullnode.mainnet.aptoslabs.com/v1",
  },
  {
    chainId: 2,
    blockchain: Blockchain.APTOS,
    network: Network.APTOS_TESTNET,
    name: "Aptos Testnet",
    isEthlike: false,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: false,
    explorerUrl: (value, type) => {
      if (type === "tx")
        return `https://explorer.aptoslabs.com/txn/${value}?network=testnet`;
      return `https://explorer.aptoslabs.com/address/${value}?network=testnet`;
    },
    providerUrl: "https://fullnode.testnet.aptoslabs.com/v1",
  },
  {
    chainId: 7518,
    blockchain: Blockchain.MEVERSE,
    network: Network.MEVERSE,
    name: "MEVerse",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://meversescan.io",
    providerUrl: "https://rpc.meversemainnet.io",
  },
  {
    chainId: 4759,
    blockchain: Blockchain.MEVERSE,
    network: Network.MEVERSE_TESTNET,
    name: "MEVerse Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://testnet.meversescan.io",
    providerUrl: "https://rpc.meversetestnet.io",
  },
  {
    chainId: 91002,
    blockchain: Blockchain.PSM,
    network: Network.PSM,
    name: "PSM",
    isEthlike: true,
    isMainnet: true,
    isSupported: [], // 미지원
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: false,
    explorerUrl: "https://explorer.nexon.io",
    providerUrl: null,
  },
  {
    chainId: 500,
    blockchain: Blockchain.PSM,
    network: Network.PSM_TESTNET,
    name: "PSM Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.testnet.nexon.io",
    providerUrl: null,
  },
  {
    chainId: 400,
    blockchain: Blockchain.PSM_TEST,
    network: Network.PSM_TESTNET_TEST,
    name: "PSM Testnet Test",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://test-explorer.testnet.nexon.io",
    providerUrl: null,
  },
  {
    chainId: 100,
    blockchain: Blockchain.PSM_DEV,
    network: Network.PSM_TESTNET_DEV,
    name: "PSM Testnet Dev",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://dev-explorer.testnet.nexon.io",
    providerUrl: null,
  },
  {
    chainId: 19011,
    blockchain: Blockchain.HOME_VERSE,
    network: Network.HOME_VERSE,
    name: "HOME Verse",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.oasys.homeverse.games",
    providerUrl: "https://rpc.mainnet.oasys.homeverse.games",
  },
  {
    chainId: 40875,
    blockchain: Blockchain.HOME_VERSE,
    network: Network.HOME_VERSE_TESTNET,
    name: "HOME Verse Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.testnet.oasys.homeverse.games",
    providerUrl: "https://rpc.testnet.oasys.homeverse.games",
  },
  {
    chainId: 411,
    blockchain: Blockchain.YOOLDO_VERSE,
    network: Network.YOOLDO_VERSE,
    name: "Yooldo Verse",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.yooldo-verse.xyz",
    providerUrl: "https://rpc.yooldo-verse.xyz",
  },
  {
    chainId: 20197,
    blockchain: Blockchain.YOOLDO_VERSE,
    network: Network.SAND_VERSE,
    name: "Sand Verse",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scan.sandverse.oasys.games",
    providerUrl: "https://rpc.sandverse.oasys.games",
  },
  {
    chainId: 248,
    blockchain: Blockchain.OASYS,
    network: Network.OASYS,
    name: "Oasys",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scan.oasys.games",
    providerUrl: "https://rpc.mainnet.oasys.games",
  },
  {
    chainId: 9372,
    blockchain: Blockchain.OASYS,
    network: Network.OASYS_TESTNET,
    name: "Oasys Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scan.testnet.oasys.games",
    providerUrl: "https://rpc.testnet.oasys.games",
  },
  {
    chainId: 29548,
    blockchain: Blockchain.MCH_VERSE,
    network: Network.MCH_VERSE,
    name: "MCH Verse",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.oasys.mycryptoheroes.net",
    providerUrl: "https://rpc.oasys.mycryptoheroes.net/",
  },
  {
    chainId: 420,
    blockchain: Blockchain.MCH_VERSE,
    network: Network.MCH_VERSE_TESTNET,
    name: "MCH Verse Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://explorer.oasys.sand.mchdfgh.xyz",
    providerUrl: "https://rpc.oasys.sand.mchdfgh.xyz/",
  },
  {
    chainId: 295,
    blockchain: Blockchain.HEDERA,
    network: Network.HEDERA,
    name: "Hedera",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://hashscan.io/mainnet",
    providerUrl: "https://mainnet.hashio.io/api",
  },
  {
    chainId: 296,
    blockchain: Blockchain.HEDERA,
    network: Network.HEDERA_TESTNET,
    name: "Hedera Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: true,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://hashscan.io/testnet",
    providerUrl: "https://testnet.hashio.io/api",
  },
  {
    chainId: 16116,
    blockchain: Blockchain.DEFI_VERSE,
    network: Network.DEFI_VERSE,
    name: "DeFi Verse",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scan.defiverse.net",
    providerUrl: "https://rpc.defi-verse.org/",
  },
  {
    chainId: 17117,
    blockchain: Blockchain.DEFI_VERSE,
    network: Network.DEFI_VERSE_TESTNET,
    name: "DeFi Verse Testnet",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://scan-testnet.defiverse.net",
    providerUrl: "https://rpc-testnet.defi-verse.org",
  },
  {
    chainId: 255,
    blockchain: Blockchain.KROMA,
    network: Network.KROMA,
    name: "Kroma",
    isEthlike: true,
    isMainnet: true,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://kromascan.com",
    providerUrl: null,
  },
  {
    chainId: 2358,
    blockchain: Blockchain.KROMA,
    network: Network.KROMA_SEPOLIA,
    name: "Kroma Sepolia",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://sepolia.kromascan.com",
    providerUrl: null,
  },
  {
    chainId: 807424,
    blockchain: Blockchain.ASM_QA,
    network: Network.ASM_QA,
    name: "ASM QA",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://subnets-test.avax.network/jono14",
    providerUrl: null,
  },
  {
    chainId: 595581,
    blockchain: Blockchain.ASM_TEST,
    network: Network.ASM_TEST,
    name: "ASM Test",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://subnets-test.avax.network/jono13",
    providerUrl: null,
  },
  {
    chainId: 955081,
    blockchain: Blockchain.ASM_DEV,
    network: Network.ASM_DEV,
    name: "ASM Dev",
    isEthlike: true,
    isMainnet: false,
    isSupported: ["in-app", "standalone"],
    isSupportedNft: false,
    isSupportedHome: true,
    openWalletConnect: true,
    explorerUrl: "https://subnets-test.avax.network/jono12",
    providerUrl: null,
  },
];

export const mainnetList = networkConfigs.reduce((acc, config) => {
  if (config.isMainnet) {
    acc.push(config.network);
  }
  return acc;
}, [] as Network[]);

export const testnetList = networkConfigs.reduce((acc, config) => {
  if (!config.isMainnet) {
    acc.push(config.network);
  }
  return acc;
}, [] as Network[]);

export const ethlikeBlockchains = Object.entries(BLOCKCHAIN_INFO_MAP).reduce(
  (acc, cur) => {
    const [blockchain, info] = cur;

    if (info.isEthlike) {
      acc.push(blockchain as Blockchain);
    }
    return acc;
  },
  [] as Blockchain[]
);

export const getNetworkConfig = (network: Network) => {
  return networkConfigs.find((config) => config.network === network);
};

export function isMainnet(network: Network) {
  if (mainnetList.includes(network)) {
    return true;
  }
  return false;
}