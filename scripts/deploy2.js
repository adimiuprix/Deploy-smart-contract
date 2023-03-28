// Kita memerlukan Runtime Environment
// Library ini sudah cukup untuk compile, tadi nya menggunakan hardhat itu sendiri.
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

//  Contoh deploy dengan arguments constructor
async function main() {
  const Arguments = await hre.ethers.getContractFactory("Arguments");
  
//  Deklarasikan dulu arguments constructor pada constanta
//  dan beri nilai sesuai urutan (Semua yang ada)
  const value1 = "singa";
  const value2 = "domba";
  const value3 = 2;
  const value4 = "0x82555Cc48a532Fa4e2194aB883eB6d465149F80E";

//  Panggil contract dengan fungsi deploy dengan parameter
  const arguments = await Arguments.deploy(value1, value2, value3, value4);
  await arguments.deployed();

  console.log("contract deployed to:", arguments.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
