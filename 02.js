const prompt = require('prompt-sync')()
const idade = parseInt(prompt(`digite sua idade: `));
const conversao = 365
const total = conversao * idade
console.log(`seus dias terra são: ${total}`);
