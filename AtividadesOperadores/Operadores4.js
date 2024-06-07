const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let calculo;

n1 = leia.questionFloat("\nDigite o valor: ", {limitMessage: 'Por favor, digite um valor valido'});
n2 = leia.questionFloat("\nDigite o valor: ", {limitMessage: 'Por favor, digite um valor valido'});
n3 = leia.questionFloat("\nDigite o valor: ", {limitMessage: 'Por favor, digite um valor valido'});
n4 = leia.questionFloat("\nDigite o valor: ", {limitMessage: 'Por favor, digite um valor valido'});

calculo = (n1 * n2) - (n3 * n4)

console.log("\nA diferença é de: " + calculo);
