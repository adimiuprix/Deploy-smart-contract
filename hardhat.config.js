require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter")
require('dotenv').config()

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",

  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    },
    evmVersion: `cancun`,
  },

  networks: {
    sepolia: {
      url: process.env.SEPOLIA_ETH,
      accounts: [process.env.PRIVATE_KEY],
    },
    hybrid: {
      url: process.env.HYBRID,
      accounts: [process.env.PRIVATE_KEY],
    },
    cardona: {
      url: process.env.ZKCARDONA_TESTNET,
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: process.env.AMOY_POLYGON,
      accounts: [process.env.PRIVATE_KEY],
    },
    vanguard: {
      url: process.env.VANGUARD,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      sepolia: process.env.ETHEREUM_API_KEY,
    },
    customChains: [
      {
        network: "vanguard",
        chainId: 78600,
        urls: {
          apiURL: "https://explorer-vanguard.vanarchain.com/api/v2",
          browserURL: "https://zentrace.io"
        }
      }
    ]
  },

  paths: {
    cache: "./cache",
    artifacts: "./artifacts",
  },

  sourcify: {
    enabled: true
  },

  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
}