import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
import '@typechain/hardhat';
import {HardhatUserConfig} from 'hardhat/types';
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

const secret = require("./secret.json");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            }
        ]
    },
    namedAccounts: {
        owner: 0,
        user1: 2,
    },
    networks: {
        goerli: {
            url: secret.url_goerli,
            accounts: [secret.key],
        },
        hardhat: {}
    },
    etherscan: {
        apiKey: secret.api_key
    },
    mocha: {
        timeout: 60000,
    },
}
export default config;

