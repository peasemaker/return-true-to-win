// submitted by IWantAmbago

const rand = Math.random();

function hunt2(x) {
    if (x - rand < 0.001) {
        if (x === rand) {
            throw "You got it!";
        }
        throw "You are so close";
    }

    return x == rand;
}