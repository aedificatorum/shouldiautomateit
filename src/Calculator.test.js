import Calculator from "./Calculator"

it("Returns an array when called with no arguments", () => {
    const returnValue = Calculator();

    expect(returnValue).toBeInstanceOf(Array);
})