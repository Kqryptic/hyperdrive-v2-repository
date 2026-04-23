// SPDX-License-Identifier: BSL-1.1
pragma solidity ^0.8.20;

/**
 * @title HyperdriveAVSAdapter
 * @dev Interface for Hyperdrive to register as an Actively Validated Service (AVS) 
 * and manage task validation via restaked operators.
 */
interface IAVSDirectory {
    function registerService(address service, bytes calldata signature) external;
}

interface IDelegationManager {
    function delegateTo(address operator, bytes calldata signature) external;
}

contract HyperdriveAVSAdapter {
    address public immutable avsDirectory;
    address public immutable delegationManager;
    address public owner;

    struct Task {
        bytes32 taskHash;
        uint32 taskCreatedBlock;
        bool isCompleted;
        bytes proof;
    }

    mapping(uint256 => Task) public tasks;
    uint256 public taskCount;

    event TaskCreated(uint256 indexed taskId, bytes32 taskHash);
    event TaskCompleted(uint256 indexed taskId, address operator, bytes proof);

    constructor(address _avsDirectory, address _delegationManager) {
        avsDirectory = _avsDirectory;
        delegationManager = _delegationManager;
        owner = msg.sender;
    }

    /**
     * @notice Registers Hyperdrive as an AVS on the network.
     */
    function registerAsAVS(bytes calldata signature) external {
        require(msg.sender == owner, "Only owner");
        IAVSDirectory(avsDirectory).registerService(address(this), signature);
    }

    /**
     * @notice Submits a new task for validation (e.g., a trade execution or DKG sync).
     */
    function createTask(bytes32 _taskHash) external returns (uint256) {
        taskCount++;
        tasks[taskCount] = Task({
            taskHash: _taskHash,
            taskCreatedBlock: uint32(block.number),
            isCompleted: false,
            proof: ""
        });
        emit TaskCreated(taskCount, _taskHash);
        return taskCount;
    }

    /**
     * @notice Completes a task with a proof from a restaked operator.
     */
    function completeTask(uint256 _taskId, bytes calldata _proof) external {
        Task storage task = tasks[_taskId];
        require(!task.isCompleted, "Task already completed");
        
        // In a full implementation, this would verify the operator's signature 
        // and check their restaked weight via DelegationManager.
        task.isCompleted = true;
        task.proof = _proof;

        emit TaskCompleted(_taskId, msg.sender, _proof);
    }
}
