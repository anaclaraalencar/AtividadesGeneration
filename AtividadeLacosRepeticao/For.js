const leia = require('readline-sync');

let primeiroNumero;
let ultimoNumero;

primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo:");
ultimoNumero = leia.questionInt("Digite o primeiro numero do intervalo:");

if (primeiroNumero >= ultimoNumero){
    console.log("\nIntervalo Invalido!");
}else
    {
        console.log(`\nNo intervalo entre ${primeiroNumero} e ${ultimoNumero}:`);
    for (let i = primeiroNumero; i <= ultimoNumero; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(`${i} é multiplo de 3 e 5`);
        }
    }
}