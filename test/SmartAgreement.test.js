const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SmartAgreement Contract", function () {
  let SmartAgreement, smartAgreement, owner, addr1, addr2;

  beforeEach(async function () {
    SmartAgreement = await ethers.getContractFactory("SmartAgreement");
    [owner, addr1, addr2] = await ethers.getSigners();
    smartAgreement = await SmartAgreement.deploy(addr1.address, addr2.address, ethers.utils.parseEther("1"));
  });

  it("Should set the right parties and amount", async function () {
    expect(await smartAgreement.partyA()).to.equal(addr1.address);
    expect(await smartAgreement.partyB()).to.equal(addr2.address);
    expect(await smartAgreement.contractAmount()).to.equal(ethers.utils.parseEther("1"));
  });

  it("Should activate the contract", async function () {
    await smartAgreement.connect(addr2).activateContract();
    expect(await smartAgreement.state()).to.equal(1); // Active
  });

  it("Should complete the contract", async function () {
    await smartAgreement.connect(addr2).activateContract();
    await smartAgreement.connect(addr1).completeContract();
    expect(await smartAgreement.state()).to.equal(2); // Completed
  });

  it("Should allow dispute", async function () {
    await smartAgreement.connect(addr2).activateContract();
    await smartAgreement.connect(addr1).disputeContract();
    expect(await smartAgreement.state()).to.equal(3); // Disputed
  });
});
