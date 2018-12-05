// submitted by IWantAmbago

verifyInput = str => {
    if (/[\d-+\/*~^%&\|]/.test(str)) throw new Error('No math allowed');
};

const randomInt = () => Math.floor(Math.random() * 1e4);
const numbers = Array.from(new Array(1e3)).map(randomInt);

Object.freeze(Array.prototype);
Object.freeze(String.prototype);
Object.freeze(Number.prototype);
Object.freeze(numbers);

const every = [].every.bind(numbers);

const isThreeven = f => every(n => f(n) === (n % 3 === 0));