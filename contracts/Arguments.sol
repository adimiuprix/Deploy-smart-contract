// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Arguments {
    string public word1;
    string public word2;

    constructor(string memory _word1, string memory _word2) {
        word1 = _word1;
        word2 = _word2;
    }
}
