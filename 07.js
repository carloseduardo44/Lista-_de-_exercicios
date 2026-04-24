const prompt = require('prompt-sync')();

const estudante = prompt("Você é estudante? (s/n): ").toLowerCase();
const idade = parseInt(prompt("Digite sua idade: "));
 
if (estudante === "s" || idade > 60) {
    console.log("Você tem direito ao desconto!");
} else {
    console.log("Sem desconto.");
}