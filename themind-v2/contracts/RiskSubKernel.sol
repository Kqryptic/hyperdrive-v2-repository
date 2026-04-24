// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RiskSubKernel {
    address public kernel;
    mapping(address => uint256) public assetCaps;

    constructor(address _kernel) {
        kernel = _kernel;
    }

    function setAssetCap(address _asset, uint256 _cap) external {
        // Only kernel/director can set caps
        assetCaps[_asset] = _cap;
    }

    function verifyTrade(address _asset, uint256 _amount) external view returns (bool) {
        return _amount <= assetCaps[_asset];
    }
}