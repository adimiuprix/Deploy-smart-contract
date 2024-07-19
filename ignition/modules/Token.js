const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

const Module = buildModule("TokenModule", (m) => {
  const sc = m.contract("Token")  // "Token" adalah nama contract yang di pilih

  return { sc }
})

module.exports = Module;