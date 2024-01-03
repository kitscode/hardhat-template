import {ethers} from "hardhat";
import {getCurrentTimestamp} from "hardhat/internal/hardhat-network/provider/utils/getCurrentTimestamp";

async function main() {

    let greeter = await ethers.getContract("Greeter");
    let greetString = await greeter.greet();
    console.log(`greetString: ${greetString}`)

    await (await greeter.setGreeting("Hola: " + getCurrentTimestamp())).wait();
    greetString = await greeter.greet();
    console.log(`greetString new: ${greetString}`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
