// submitted by IWantAmbago

const eval = window.eval;

function theBiggest3(x) {
    let isReached = false;
    return eval(`${x} \n > Infinity && (isReached=!isReached)`) && isReached;
}