const prompt = require('prompt-sync')()
const salario = parseFloat(prompt(`quanto voce recebeu esse mes? :`));
const reajuste = 1.15
const total = salario * reajuste
console.log(`Seu total com o reajuste foi de: ${total}`);