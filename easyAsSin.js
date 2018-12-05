// submitted by IWantAmbago

const randomInt = () => Math.random() * Math.PI * 2;
const values = Array.from(new Array(10)).map(randomInt);

Object.freeze(Array.prototype);
Object.freeze(String.prototype);
Object.freeze(Number.prototype);
Object.freeze(numbers);

const getSin = Math.sin;

delete Math;

const every = [].every.bind(values);

function easyAsSin(f) {
    return every(n => f(n) === getSin(n));
}