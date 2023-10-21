import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1_000
      }
    }
  },
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [`${process.env.PRIVATE_KEY || ""}`],
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: `${process.env.POLYGONSCAN_APIKEY || ""}`
    }
  }
};

export default config;
