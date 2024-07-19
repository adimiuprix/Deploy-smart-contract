const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

const Module = buildModule("ArgumentsModule", (m) => {
  const sc = m.contract("Arguments", ["Mangga", "Pisang"])  // "Arguments" adalah nama contract yang di pilih, [] adalah argument nya

  return { sc }
});

module.exports = Module;