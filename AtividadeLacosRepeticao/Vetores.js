const leia = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor:");
console.log(vetor.join("\n"));

const numeroProcurado = leia.questionInt("\nDigite o numero que você deseja encontrar: ");

let encontrou = false;
let posicao = -1;
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        encontrou = true;
        posicao = i;
        break;
    }
}


if (encontrou) {
    console.log(`\nO número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!`);
}
