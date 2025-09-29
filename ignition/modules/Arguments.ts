import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Module = buildModule("ArgumentsModule", (m) => {
  const contract = m.contract("Arguments", ["Mangga", "Pisang"])  // "Arguments" adalah nama contract yang di pilih, [] adalah argument nya

  return { contract }
});

module.exports = Module;