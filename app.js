const sum = (a, b) => {
    return a + b;
};

const oneEuroIs = {
    "JPY": 156.6,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromDollarToYen = (usd) => {
    return usd / oneEuroIs["USD"] * oneEuroIs["JPY"];
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}

const fromYenToPound = (yen) => {
    return yen / oneEuroIs["JPY"] * oneEuroIs["GBP"];
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };