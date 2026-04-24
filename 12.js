const prompt = require('prompt-sync')()

let limite = parseFloat(prompt(`Digite o limite: `))

console.log("numero pares até " + limite + ";")

for (let numero =0; numero <= limite; numero += 2){
    console.log(numero)
}