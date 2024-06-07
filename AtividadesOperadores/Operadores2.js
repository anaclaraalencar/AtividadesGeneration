const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat("\nDigite a primeira nota: ", {limitMessage: 'Por favor, digite o valor da nota'});
nota2 = leia.questionFloat("\nDigite a segunda nota: ", {limitMessage: 'Por favor, digite o valor da nota'});
nota3 = leia.questionFloat("\nDigite a terceira nota: ", {limitMessage: 'Por favor, digite o valor da nota'});
nota4 = leia.questionFloat("\nDigite a quarta nota: ", {limitMessage: 'Por favor, digite o valor da nota'});

media = (nota1 + nota2 + nota3 +nota4) /4;
console.log("\nA média das notas é: " + media)