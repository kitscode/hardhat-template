import {expect} from "chai";
import {deploy2} from "../helpers/utils";

describe("Greeter", async () => {

    let greeter: any;

    beforeEach(async () => {
        greeter = await deploy2("Greeter", ["Hello, world!"]);
    });

    it("Should return the new greeting once it's changed", async () => {
        expect(await greeter.greet()).to.eq("Hello, world!");
        await greeter.setGreeting("Hola, you!");
        expect(await greeter.greet()).to.eq("Hola, you!");
    });
});
