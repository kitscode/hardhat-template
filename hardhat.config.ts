import {HardhatUserConfig} from 'hardhat/types';

import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import "@nomiclabs/hardhat-etherscan";
import '@typechain/hardhat';
import 'solidity-coverage';

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {task} from "hardhat/config";

const secret = require("./secret.json");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address);
    }
});

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.17',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 2000,
                    },
                },
            },
        ],
    },
    namedAccounts: {
        owner: 0,
        user1: 1
    },
    networks: {
        goerli: {
            url: secret.url_goerli,
            accounts: [secret.key]
        },
    },
    etherscan: {
        apiKey: secret.api_key
    }
}
export default config;

