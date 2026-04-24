// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract TheMindKernel {
    address public director;
    address public treasury;
    mapping(address => bool) public subKernels;

    event SubKernelRegistered(address indexed subKernel);
    event TreasuryUpdated(address indexed newTreasury);

    constructor(address _treasury) {
        director = msg.sender;
        treasury = _treasury;
    }

    modifier onlyDirector() {
        require(msg.sender == director, "Only director");
        _;
    }

    function registerSubKernel(address _subKernel) external onlyDirector {
        subKernels[_subKernel] = true;
        emit SubKernelRegistered(_subKernel);
    }

    function updateTreasury(address _newTreasury) external onlyDirector {
        treasury = _newTreasury;
        emit TreasuryUpdated(_newTreasury);
    }
}