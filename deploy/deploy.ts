import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());

    await deploy('Greeter', {
        from: owner,
        args: ["Hello, world!"],
        log: true,
        waitConfirmations: 1,
    });

};
export default func;
func.tags = ['deploy'];
