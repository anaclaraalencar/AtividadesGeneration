const leia = require('readline-sync');

let idade;
let menorQue21 = 0;
let maiorQue50 = 0;

idade = leia.questionInt("\nDigite uma idade: ", {limitMessage: 'Por favor, digite uma idade valida'});


while (idade >= 0) {
    if (idade < 21) {
        menorQue21++;
    } else if (idade > 50) {
        maiorQue50++;
    }
    idade = leia.questionInt("\nDigite uma idade: ", {limitMessage: 'Por favor, digite uma idade valida'});

}

console.log("\nO total de pessoas menores que 21 anos:", menorQue21);
console.log("O total de pessoas maiores que 50 anos:", maiorQue50);
