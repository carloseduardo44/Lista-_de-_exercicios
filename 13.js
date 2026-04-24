const prompt = require('prompt-sync')()

const nota = parseFloat(prompt("Digite sua nota: "))
if(nota >10){
    console.log("invalida, nostas somente permitidas entre 0 a 10")

}else{
    console.log("entrada valida!")
}