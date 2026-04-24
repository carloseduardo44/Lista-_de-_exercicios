const prompt = require('prompt-sync')();
const senhaSalva = "teste";
const entrada = prompt("Digite a senha: ");
if (entrada == senhaSalva) {
    console.log("Acesso permitido!");
} else {
    console.log("Senha incorreta!");
}