const hre = require("hardhat");

async function main() {
  const SmartAgreement = await hre.ethers.getContractFactory("SmartAgreement");
  const smartAgreement = await SmartAgreement.deploy("<PartyA_Address>", "<PartyB_Address>", hre.ethers.utils.parseEther("1"));

  await smartAgreement.deployed();
  console.log("SmartAgreement deployed to:", smartAgreement.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
