import {expect} from "chai";
import {setup} from "./utils";

describe("Greeter", async () => {
    
    it("Should return the new greeting once it's changed", async () => {
        const {owner} = await setup();
    
        expect(await owner.Greeter.greet()).to.eq("new greeting");

        const setGreetingTx = await owner.Greeter.setGreeting("Hola, you!");
        await setGreetingTx.wait();
        expect(await owner.Greeter.greet()).to.eq("Hola, you!");
    });
});
