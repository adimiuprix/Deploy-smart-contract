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
```

# Catatan
Untuk deploy lihat pola di module ignition
```js
const Module = buildModule("TokenModule", (m) => { // "TokenModule" Penamaan module bebas saja

    // Contoh tanpa argument di berikan
    const sc = m.contract("Token")  // "Token" adalah nama contract yang di pilih

    // Contoh menggunakan arguments, argumen harus urut dan perhatikan type datanya juga
    const sc = m.contract("Arguments", ["Mangga", "Pisang"])
    return { sc } // Jangan lupa mengembalikan object yang berisi contract
})
```

```shell
# Verifikasi smart contract menggunakan arguments
# Bagian <0xCA74c9Ef081842050Ec37fFa910014E0184158be> adalah address contract yang dipilih
npx hardhat verify --network sepolia 0xCA74c9Ef081842050Ec37fFa910014E0184158be "Mangga" "Pisang"
```

```shell
npx hardhat ignition deploy ignition/modules/Token.js --network sepolia --verify
npx hardhat ignition verify chain-11155111
```