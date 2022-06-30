"use strict";
function somarValoresNumericos(n1, n2, callback) {
    let result = n1 + n2;
    return callback(result);
}
function printaValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function aoQuadrado(n) {
    return n * n;
}
console.log(somarValoresNumericos(1, 2, aoQuadrado));
printaValoresNumericos(1, 2);
