import {expect} from "chai";
import {setupFixture} from "../helpers/utils";

describe("Greeter", async () => {

    let greeter: any;

    beforeEach(async () => {
        ({greeter} = await setupFixture());
    });

    it("Should return the new greeting once it's changed", async () => {
        expect(await greeter.greet()).to.eq("Hello, world!");
        await greeter.setGreeting("Hola, you!");
        expect(await greeter.greet()).to.eq("Hola, you!");
    });
});
