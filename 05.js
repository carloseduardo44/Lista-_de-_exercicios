const prompt = require('prompt-sync')()
const idade = parseInt(prompt(`digite sua seu ano de nascimento: `));
const anoatual = 2026
const total = anoatual - idade
    if(total >= 18){
        console.log(`voce é de maior`);
    } else {
        console.log(`voce é de menor!`);
    }