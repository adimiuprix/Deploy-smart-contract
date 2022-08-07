// Kita memerlukan Runtime Environment
// Library ini sudah cukup untuk compile, tadi nya menggunakan hardhat itu sendiri.
require("@nomiclabs/hardhat-ethers");

async function main() {
  // Get contract instance
  const defti = await ethers.getContractFactory("Defti");

  // Deploy contract
  const Defti = await defti.deploy();

  // Print for aesthetics :D (Optional)
  console.log("Deploying, please wait...");

  // Wait for deployment to finish
  await Defti.deployed();

  // Another aesthetics wkwkwk
  console.log("Your contract is:", Defti.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
