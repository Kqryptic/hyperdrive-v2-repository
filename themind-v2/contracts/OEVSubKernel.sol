// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract OEVSubKernel {
    address public kernel;
    
    event OEVCaptured(address indexed oracle, uint256 value);

    constructor(address _kernel) {
        kernel = _kernel;
    }

    function capture(address _oracle) external {
        // Logic to capture value from oracle updates
        emit OEVCaptured(_oracle, 0);
    }
}