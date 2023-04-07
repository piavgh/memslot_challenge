// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Challenge {
    uint16 public lastTokenId;
    address public owner;
    uint128 public saleStart;
    bool public saleStarted;
    uint16 public maxSupply;
    address[2] public minters;
    address public immutable underlyingToken;
    bytes32 private password;
    bool public isPaused;

    constructor() {
        lastTokenId = 1;
        owner = address(0x3a659fF0F7CB88Ae9c45cFFDE59D0C9c9B35af3b);
        saleStart = 1680797433;
        saleStarted = true;
        maxSupply = 10000;
        minters = [
            address(0xff65d746Be4DF8De81f9798183826395C6C80Ab6),
            address(0x690714B49819C89C826c7fc321CACb7f087D79de)
        ];
        underlyingToken = address(0xCAFe6E5A9A203BdD785223541D7b5565E618c672);
        password = bytes32(uint256(12));
        isPaused = false;
    }
}
