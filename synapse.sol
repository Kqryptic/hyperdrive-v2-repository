// SPDX-License-Identifier: BSL-1.1
pragma solidity ^0.8.20;

/**
 * @title HyperdriveSynapse
 * @dev Defines the communication schema for inter-agent handshakes.
 * Inspired by Bittensor's Synapse/Axon pattern.
 */
contract HyperdriveSynapse {
    struct SynapseHeader {
        address sender;
        uint256 nonce;
        bytes32 payloadHash;
        uint256 timestamp;
    }

    struct Synapse {
        SynapseHeader header;
        bytes payload;
        bytes signature;
    }

    /**
     * @notice Computes the hash of a Synapse header for signing.
     */
    function hashHeader(SynapseHeader memory header) public pure returns (bytes32) {
        return keccak256(abi.encode(
            header.sender,
            header.nonce,
            header.payloadHash,
            header.timestamp
        ));
    }

    /**
     * @notice Verifies the signature of a Synapse.
     */
    function verifySynapse(Synapse calldata synapse) public pure returns (bool) {
        bytes32 h = hashHeader(synapse.header);
        bytes32 ethSignedMessageHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", h));
        
        // Basic ecrecover check. In production, this would use a more robust 
        // library or support EIP-1271 for smart contract wallets.
        address signer = recoverSigner(ethSignedMessageHash, synapse.signature);
        return signer == synapse.header.sender;
    }

    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature) internal pure returns (address) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory sig) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "invalid signature length");
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }
}
