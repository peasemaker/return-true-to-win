// submitted by IWantAmbago

verifyInput = input => {
    if (/['"`]/.test(input)) throw 'No strings';
    if (/\/.+\//.test(input)) throw 'No RegExp';
    if (/i/.test(input)) throw 'No No No';
}

function evalIsEvil(is) {
    return eval('is') === 'evil' && eval('is') !== 'evil';
}