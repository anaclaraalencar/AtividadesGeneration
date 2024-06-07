const leia = require('readline-sync');

let SalarioBruto;
let AdicionalNoturno;
let HorasExtras;
let Descontos;
let SalarioLiquido;

SalarioBruto = leia.questionFloat("\nDigite o valor do salario bruto: ", {limitMessage: 'Por favor, digite o valor do salario bruto'});
AdicionalNoturno = leia.questionFloat("\nDigite o valor do adicional noturno: ", {limitMessage: 'Por favor, digite o valor do adicional noturno'});
HorasExtras = leia.questionFloat("\nDigite o valor das horas extras: ", {limitMessage: 'Por favor, digite o valor das horas extras'});
Descontos = leia.questionFloat("\nDigite o valor dos descontos: ", {limitMessage: 'Por favor, digite o valor dos descontos'});

SalarioBruto = SalarioBruto + AdicionalNoturno + (HorasExtras*5) - Descontos;

console.log("\nO valor do seu salario liquido é de: " + SalarioBruto);



