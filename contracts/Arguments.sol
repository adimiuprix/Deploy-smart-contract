// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Arguments {
    string public binatang1;
    string public binatang2;
    uint256 public nilai;
    address public wallet;

    constructor(
        string memory semut,
        string memory kelinci,
        uint256 angka,
        address alamatETH
    ) {
        binatang1 = semut;
        binatang2 = kelinci;
        nilai = angka;
        wallet = alamatETH;
    }
}
