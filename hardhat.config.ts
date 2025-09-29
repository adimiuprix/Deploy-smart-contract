import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";
import { configVariable } from "hardhat/config";

const config: HardhatUserConfig = {
  plugins: [
    hardhatToolboxViemPlugin,
    hardhatIgnitionViemPlugin
  ],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
      gas: "auto"
    },
    hybrid: {
      type: "http",
      chainType: "l1",
      url: configVariable("HYBRID_RPC_URL"),
      accounts: [configVariable("HYBRID_PRIVATE_KEY")],
    },
    cardona: {
      type: "http",
      chainType: "l1",
      url: configVariable("CARDONA_RPC_URL"),
      accounts: [configVariable("CARDONA_PRIVATE_KEY")],
    },
    amoy: {
      type: "http",
      chainType: "l1",
      url: configVariable("AMOY_RPC_URL"),
      accounts: [configVariable("AMOY_PRIVATE_KEY")],
    },
    vanguard: {
      type: "http",
      chainType: "l1",
      url: configVariable("VANGARD_RPC_URL"),
      accounts: [configVariable("VANGARD_PRIVATE_KEY")],
    },
  },
  paths: {
    cache: "./cache",
    artifacts: "./artifacts",
  },
  verify: {
    blockscout: {
      enabled: true,
    },
    etherscan: {
      apiKey: "ZMT1MZTS9R19BJJRTMPWGSB75EGKJGKPFK",
    },
  },
};

export default config;
