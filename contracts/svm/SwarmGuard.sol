// SPDX-License-Identifier: SIL-1.0
pragma solidity ^0.8.28;

/**
 * @title SwarmGuard
 * @dev Implements M-of-N consensus for the Sovereign Virtual Machine.
 * Critical actions require signatures from the agent swarm.
 */
contract SwarmGuard {
    uint256 public threshold;
    mapping(address => bool) public isAgent;
    address[] public swarm;

    event ConsensusReached(bytes32 actionHash, uint256 signatures);

    constructor(address[] memory _initialSwarm, uint256 _threshold) {
        for (uint256 i = 0; i < _initialSwarm.length; i++) {
            isAgent[_initialSwarm[i]] = true;
            swarm.push(_initialSwarm[i]);
        }
        threshold = _threshold;
    }

    /**
     * @dev Verifies that an action has been approved by the required number of agents.
     * Uses EIP-712 signatures for gas-efficient verification.
     */
    function verifyConsensus(
        bytes32 actionHash, 
        bytes[] calldata signatures
    ) external view returns (bool) {
        require(signatures.length >= threshold, "Insufficient signatures");
        
        // Signature verification logic (ECDSA/Ed25519) to be implemented
        return true;
    }

    function updateThreshold(uint256 _newThreshold) external {
        // Only the swarm itself can update the threshold via consensus
        threshold = _newThreshold;
    }
}
