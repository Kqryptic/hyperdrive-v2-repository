// SPDX-License-Identifier: BSL-1.1
pragma solidity ^0.8.20;

import "./synapse.sol";

/**
 * @title HyperdriveAxon
 * @dev The server/receiver module for Hyperdrive agents.
 * Handles incoming Synapses, verifies signatures, and prevents replay attacks.
 */
contract HyperdriveAxon is HyperdriveSynapse {
    mapping(address => uint256) public lastNonce;
    mapping(bytes4 => address) public handlers;
    address public owner;

    event SynapseReceived(address indexed sender, uint256 nonce, bytes4 indexed selector);

    constructor() {
        owner = msg.sender;
    }

    /**
     * @notice Registers a handler for a specific function selector.
     */
    function registerHandler(bytes4 selector, address handler) external {
        require(msg.sender == owner, "Only owner");
        handlers[selector] = handler;
    }

    /**
     * @notice Receives and processes a signed Synapse.
     */
    function receiveSynapse(Synapse calldata synapse) external {
        // 1. Verify signature
        require(verifySynapse(synapse), "Invalid signature");

        // 2. Prevent replay attacks
        require(synapse.header.nonce > lastNonce[synapse.header.sender], "Nonce too low");
        lastNonce[synapse.header.sender] = synapse.header.nonce;

        // 3. Extract selector and route
        bytes4 selector;
        bytes memory payload = synapse.payload;
        assembly {
            selector := mload(add(payload, 32))
        }

        address handler = handlers[selector];
        require(handler != address(0), "No handler registered");

        // 4. Forward to handler
        (bool success, ) = handler.call(synapse.payload);
        require(success, "Handler execution failed");

        emit SynapseReceived(synapse.header.sender, synapse.header.nonce, selector);
    }
}
