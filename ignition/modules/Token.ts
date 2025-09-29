import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Module = buildModule("TokenModule", (m) => {
  const contract = m.contract("Token")  // "Token" adalah nama contract yang di pilih

  return { contract }
})

module.exports = Module;