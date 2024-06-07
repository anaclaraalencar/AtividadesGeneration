const leia = require('readline-sync');

let Salario;
let Abono;
let NovoSalario;

Salario = leia.questionFloat("\nDigite o valor do seu salario: ", {limitMessage: 'Por favor, digite o valor do salario'});
console.log("\nO valor do seu salario é de: " + Salario);
Abono = leia.questionFloat("\nDigite o valor do seu abono: ", {limitMessage: 'Por favor, digite o valor do abono'});
console.log("\nO valor do seu abono é de: " + Abono);
NovoSalario = (Salario + Abono)
console.log("\nO valor do seu novo salario é de: " + NovoSalario);
