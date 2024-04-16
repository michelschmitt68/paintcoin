import { ethers } from "hardhat";

//Types
import { Paint } from "../typechain-types";


async function main() {
  let contract: Paint;
  
  const [owner] = await ethers.getSigners();
  contract = await ethers.deployContract("Paint", [owner.address, 10000]);

  await contract.waitForDeployment();

  console.log(`Paint deployed to ${contract.target}`)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });