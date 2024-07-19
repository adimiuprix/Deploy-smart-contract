require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require('dotenv').config()

const POLYGON_API_KEY = process.env.POLYGON_API_KEY
const HYBRID = process.env.HYBRID
const ZKCARDONA_TESTNET = process.env.ZKCARDONA_TESTNET
const AMOY_POLYGON = process.env.AMOY_POLYGON

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",

  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  networks: {
    hybrid: {
      url: HYBRID,
      accounts: [process.env.PRIVATE_KEY],
    },
    cardona: {
      url: ZKCARDONA_TESTNET,
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: AMOY_POLYGON,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: [process.env.PRIVATE_KEY],

    customChains: [
      {
        network: 'amoy',
        chainId: 80002,
        urls: {
          apiKey: POLYGON_API_KEY,
          apiURL: 'https://api-amoy.polygonscan.com/api',
          browserURL: 'https://amoy.polygonscan.com/',
        },
      },
    ],

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