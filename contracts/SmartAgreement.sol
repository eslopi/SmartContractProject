// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartAgreement {
    address public partyA;
    address public partyB;
    uint public contractAmount;
    bool public isCompleted;

    enum ContractState { Created, Active, Completed, Disputed }
    ContractState public state;

    event ContractCreated(address indexed partyA, address indexed partyB, uint amount);
    event ContractActivated();
    event ContractCompleted();
    event ContractDisputed();

    constructor(address _partyA, address _partyB, uint _amount) payable {
        require(msg.value == _amount, "Amount does not match contract value");
        partyA = _partyA;
        partyB = _partyB;
        contractAmount = _amount;
        state = ContractState.Created;
        emit ContractCreated(partyA, partyB, contractAmount);
    }

    function activateContract() external onlyPartyB {
        require(state == ContractState.Created, "Contract is not in Created state");
        state = ContractState.Active;
        emit ContractActivated();
    }

    function completeContract() external onlyPartyA {
        require(state == ContractState.Active, "Contract is not active");
        state = ContractState.Completed;
        isCompleted = true;
        payable(partyB).transfer(contractAmount);
        emit ContractCompleted();
    }

    function disputeContract() external onlyPartyA {
        require(state == ContractState.Active, "Contract is not active or already completed");
        state = ContractState.Disputed;
        emit ContractDisputed();
    }

    modifier onlyPartyA() {
        require(msg.sender == partyA, "Only party A can execute this function");
        _;
    }

    modifier onlyPartyB() {
        require(msg.sender == partyB, "Only party B can execute this function");
        _;
    }
}
