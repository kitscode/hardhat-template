import {deployments, ethers, getChainId} from "hardhat";
import {Greeter} from "../typechain-types";

export const setupFixture = deployments.createFixture(async () => {
    await deployments.fixture();
    return getContracts();
});

export async function getContracts() {
    const contracts: any = {
        greeter: await ethers.getContract<Greeter>("Greeter"),
    };
    let users: any = {
        owner: await ethers.getNamedSigner("owner"),
        user1: await ethers.getNamedSigner("user1"),
    }
    return {...contracts, ...users};
}