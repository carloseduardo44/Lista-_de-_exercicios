const prompt = require('prompt-sync')()
    const nota1 = parseFloat(prompt(`me informe a primeira nota:`));
    const nota2 = parseFloat(prompt(`me informe sua segunda nota:`));
        const media = (nota1+nota2)/2
        console.log(`sua media final é: ${media}`);