import Calculator from "./Calculator"

it("Returns an array when called with no arguments", () => {
    const returnValue = Calculator();

    expect(returnValue).toBeInstanceOf(Array);
});

it("Returns an array when the numberOfMonths argument is skipped", () => {
    const table = Calculator(1,1,1);

    expect(table).toBeInstanceOf(Array);
    expect(table.length).toBeGreaterThan(0);
});

it("Returns an array containing the number of months asked for", () => {
    let table = Calculator(1,1,1,1);
    expect(table.length).toBe(1);

    table = Calculator(1,1,1,10);
    expect(table.length).toBe(10);

    table = Calculator(1,1,1,120);
    expect(table.length).toBe(120);
});

it("The first object in the array has the required properties", () => {
    const table = Calculator(1,1,1);
    const row = table[0];

    expect(row).toHaveProperty("month");
    expect(row).toHaveProperty("timeSaved");
    expect(row).toHaveProperty("roiSlow");
    expect(row).toHaveProperty("roiMed");
    expect(row).toHaveProperty("roiFast");
    expect(row).toHaveProperty("shouldIAutomate");
});

it("Every row in the array has the right object shape", () => {
    const table = Calculator(1,1,1);
    
    expect(table.every(row => {
        return row.hasOwnProperty("month")
    })).toBe(true);

    expect(table.every(row => {
        return row.hasOwnProperty("timeSaved")
    })).toBe(true);

    expect(table.every(row => {
        return row.hasOwnProperty("roiSlow")
    })).toBe(true);

    expect(table.every(row => {
        return row.hasOwnProperty("roiMed")
    })).toBe(true);

    expect(table.every(row => {
        return row.hasOwnProperty("roiFast")
    })).toBe(true);

    expect(table.every(row => {
        return row.hasOwnProperty("shouldIAutomate")
    })).toBe(true);
});