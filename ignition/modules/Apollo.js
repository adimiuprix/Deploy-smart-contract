const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Apollo", (m) => {
  const apollo = m.contract("Nitroken");

  return { apollo };
});