import {ethers} from "hardhat";

export async function deploy2(name: any, args: any) {
    const contractFactory = await ethers.getContractFactory(name)
    return await contractFactory.deploy(...args)
}