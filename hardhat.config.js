/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-verify");
/** require dotenv, install first */
require('dotenv').config();
const {  PRIVATE_KEY, API_KEY } = process.env; /** Call the variables from environment setup */

/** Export modul, you can also dissmiss "settings" (Optional) */
module.exports = {
  solidity: "0.8.24",

/** This setting is optional but recomend, Up to you...  */
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  /** Choose network do you want for deploy */
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: "https://rpc-amoy.polygon.technology",
      chainId: 80002,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },

  /** Path untuk artifacts and caches (optional: You can also not write this code)*/
  paths: {
    cache: "./cache",
    artifacts: "./artifacts",
  },

  /** Etherscan Initial for verifying */
  etherscan: {
    apiKey: {
      polygon_amoy: API_KEY
    },
    customChains: [
      {
        network: "polygon_amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://rpc-amoy.polygon.technology",
          browserURL: "https://amoy.polygonscan.com",
        },
      },
    ],
  },

  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
