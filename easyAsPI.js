// submitted by IWantAmbago

const PI = Math.PI;

Math = new Proxy(Math,{get:(_,k) => k==='PI' ? NaN : _[k]});

function easyAsPI(x) {
    return x === PI;
}