// submitted by IWantAmbago

let rand = Math.random();

const forLuckyManOnly = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky"
];

function getLucky(x) {
    if (Math.random() < 1e-8) {
        rand = forLuckyManOnly.join('');
        throw 'You are lucky!';
    }

    return x === rand;
}