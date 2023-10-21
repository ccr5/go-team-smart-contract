import { ethers } from "hardhat";

async function main() {
  const GoTeam = await ethers.getContractFactory("GoTeam")
  const goTeam = await GoTeam.deploy()
  console.log(await goTeam.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
