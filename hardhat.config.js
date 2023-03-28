/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config(); /** require dotenv, install first */
require("@nomiclabs/hardhat-ethers"); /** Install this dependecy */
require("@nomiclabs/hardhat-etherscan"); /** Also install this */
const {  PRIVATE_KEY, API_KEY } = process.env; /** Call the variables from environment setup */

/** Export modul, you can also dissmiss "settings" (Optional) */
module.exports = {
  solidity: "0.8.9",

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
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [`0x${PRIVATE_KEY}`]
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
    apiKey: API_KEY
  }

};
