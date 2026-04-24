const prompt = require('prompt-sync')();
let repetir = true
let nota = 0
let aluno = 0

while(repetir == true){
    let pergunta = prompt("Deseja informar uma nova nota? ")
    if(pergunta == "sim" || pergunta == "SIM" || pergunta == "Sim"){
        nota += parseFloat(prompt("Digite o valor da nota a ser guardada: "))
        aluno++
}else {
repetir = false
}
}
console.log(`A media é ${(nota/aluno).toFixed(2)}`)