const prompt = require('prompt-sync')();
let soma = 0;
let numero = parseFloat(prompt(`numero: `));

while (numero !==0 ){
    console.log(soma += numero)

    numero = parseFloat(prompt("digie outro numero (ou 0 para parar):"))

}
console.log("A soma total dos numeros é: " + soma)