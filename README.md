# Belajar deploy smart contract

Project ini menggunakan Library OpenZeppelin untuk menulis Solidity, dan Hardhat sebagai plugin.
The tasks performed are as follows:

- Write solidity
- Compile
- Deploy to any network
- Verify

Untuk menjalankan ketik di terminal:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

# Catatan
Jika hendak deploy smart contract dengan argument, gunakan perintah seperti berikut.
Arguments berupa string perlu menambahkan tanda ("..."), jika berupa interger jangan gunakan tanda kutip.
untuk verify, pastikan arguments yang diberikan cocok dan urut sesuai yang ada pada deploy2.js

```shell
npx hardhat run scripts/deploy2.js --network sepolia
npx hardhat verify --network sepolia 0xCA74c9Ef081842050Ec37fFa910014E0184158be "singa" "domba" 2 "0x82555Cc48a532Fa4e2194aB883eB6d465149F80E"

```shell
npx hardhat ignition deploy ignition/modules/Token.js --network sepolia --verify
npx hardhat ignition verify chain-11155111
