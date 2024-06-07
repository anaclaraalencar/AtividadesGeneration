const leia = require('readline-sync');

let numero;
let soma = 0;


do {
    numero = leia.questionInt("\nDigite um numero: ", {limitMessage: 'Por favor, digite um numero valido'});

    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0);

console.log("\nA soma dos números positivos é:", soma);
