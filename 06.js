const prompt = require('prompt-sync')();

const frequencia = parseInt(prompt(`Digite a frequência: `));
const nota = parseInt(prompt(`Digite sua nota: `));

if (nota >= 7) {
    if (frequencia >= 75) {
        console.log(`Passou!`);
    } else {
        console.log(`Reprovado por frequência!`);
    }
} else {
    console.log(`Reprovado por nota!`);
}