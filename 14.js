const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));
let fator = 1;

for (let numero2 = 1; numero2 <= numero; numero2++) {
    fator *= numero2;
}

console.log(numero + "! = " + fator);