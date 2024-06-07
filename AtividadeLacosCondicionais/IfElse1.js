const leia = require('readline-sync');

let num1;
let num2;
let num3;

num1 = leia.questionInt("\nDigite o primeiro valor: ", {limitMessage: 'Por favor, digite um valor valido'});
num2 = leia.questionInt("\nDigite o segundo valor: ", {limitMessage: 'Por favor, digite um valor valido'});
num3 = leia.questionInt("\nDigite o terceiro valor: ", {limitMessage: 'Por favor, digite um valor valido'});

if((num1 + num2) > num3){;
console.log(`A soma de ${num1} + ${num2} e maior que ${num3}.`);
S
} else if((num1 + num2) < num3){; 
    console.log(`A soma de ${num1} + ${num2} e menor que ${num3}.`);

} else if((num1 + num2) == num3){;
    console.log(`A soma de ${num1} + ${num2} e igual que ${num3}.`);

}

else{
    console.log("\nO valor digitado e invalido!");

}

