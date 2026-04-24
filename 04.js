const prompt = require('prompt-sync')()
const numero =  parseInt(prompt(`digite um numero: `));
if(numero%2==0){
    console.log('é par!');

}else{
    console.log('impar');
}