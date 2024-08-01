const { fromDollarToYen, fromEuroToDollar, fromYenToPound, sum } = require('./app.js');

// Proof of Concept:
test("adds 14 + 9 to equal 23.", () => {
    const total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars.", () => {
    const dollars = fromEuroToDollar(3.5);
    const expectedDollars = 3.5 * 1.07;
    expect(dollars).toBe(expectedDollars);
});

// Challenges:
// I will group tests related to the same function using describe.
// See https://jestjs.io/docs/api#describename-fn

describe("fromDollarToYen", () => {
    test("Having no money is independent of the currency.", () => {
        const yen = fromDollarToYen(0);
        expect(yen).toBe(0);
    });

    test("One dollar should be 146.35514 yen.", () => {
        const yen = fromDollarToYen(1);
        const expectedYen = 15660 / 107;
        expect(yen).toBe(expectedYen);
    });

    test("107 dollars should be 15660 yen.", () => {
        const yen = fromDollarToYen(107);
        const expectedYen = 15660;
        expect(yen).toBe(expectedYen);
    });

    // I intentionally tried with more digits until running into precision errors.
    // See https://jestjs.io/docs/expect#tobeclosetonumber-numdigits
    test("12345 dollars should be 1806754.2056074766 yen.", () => {
        const yen = fromDollarToYen(12345);
        const expectedYen = 12345 * 15660 / 107;
        expect(yen).toBeCloseTo(expectedYen, 8);
    });
});

describe("fromYenToPound", () => {
    test("Having no money is independent of the currency.", () => {
        const pounds = fromYenToPound(0);
        expect(pounds).toBe(0);
    });

    test("One yen should be 0.00555555 pounds.", () => {
        const pounds = fromYenToPound(1);
        const expectedPounds = 1 / 180;
        expect(pounds).toBe(expectedPounds);
    });

    // Using toBe, this failed, so going to use toBeCloseTo.
    // Expected: 1
    // Received: 1.0000000000000002
    test("180 yen should be 1 pound.", () => {
        const pounds = fromYenToPound(180);
        expect(pounds).toBeCloseTo(1, 8);
    });
});