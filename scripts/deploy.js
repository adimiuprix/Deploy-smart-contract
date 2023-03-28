// Kita memerlukan Runtime Environment
// Library ini sudah cukup untuk compile, tadi nya menggunakan hardhat itu sendiri.
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");  // library ini untuk verify smart contract

async function main() {
  // Get contract instance
  const token = await ethers.getContractFactory("Nitroken");

  // Deploy contract
  const Nitroken = await token.deploy();

  // Print for aesthetics :D (Optional)
  console.log("Deploying, please wait...");

  // Wait for deployment to finish
  await Nitroken.deployed();

  // Another aesthetics wkwkwk
  console.log("Your contract is:", Nitroken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
