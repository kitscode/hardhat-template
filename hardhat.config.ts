import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
import '@typechain/hardhat';
import {HardhatUserConfig} from 'hardhat/types';
import "@nomiclabs/hardhat-etherscan";

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
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100000
                    }
                }
            },
            {
                version: "0.7.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100000
                    }
                }
            }
        ],
    },
    namedAccounts: {
        owner: 0,
        user1: 1,
        user2: 2,
        user3: 3,
        user4: 4,
        user5: 5
    },
    networks: {
        bsc_test: {
            url: secret.url_bsc_testnet,
            accounts: [secret.key],
            timeout: 120000
        },
        kovan: {
            url: secret.url_kovan,
            accounts: {
                mnemonic: secret.mnemonic,
                count: 5
            },
            timeout: 120000
        },
        hardhat: {
            forking: {
                url: secret.url_fork,
                blockNumber: 14182860,
                enabled: false
            }
        },
    },
    etherscan: {
        apiKey: secret.apiKey
    },
}
export default config;

