const leia = require("readline-sync");

let nome;
let cargo;
let salario;
let reajuste;
let novoSalario;

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n1 -- Gerente.\nPercentual do reajuste: 10%.");
console.log("\n2 -- Vendedor.\nPercentual do reajuste: 7%.");
console.log("\n3 -- Supevisor.\nPercentual do reajuste: 9%.");
console.log("\n4 -- Motorista.\nPercentual do reajuste: 6%.");
console.log("\n5 -- Estoquista.\nPercentual do reajuste: 5%.");
console.log("\n6 -- Técnico de TI.\nPercentual do reajuste: 8%.");

nome = leia.question("\nDigite o nome do colaborador: ");
cargo = leia.questionInt("\nDigite o codigo do cargo do colaborador: ");
salario = leia.questionInt("\nDigite o valor do seu salario: ");

switch (cargo){
    case 1:
        reajuste = 0.10;
        cargo = "Gerente";
        break;
        case 2:
        reajuste = 0.07;
        cargo = "Vendedor";
        break;
        case 3:
        reajuste = 0.09;
        cargo = "Supervisor";
        break;
        case 4:
        reajuste = 0.06;
        cargo = "Motorista";
        break;
        case 5:
        reajuste = 0.05;
        cargo = "Estoquista";
        break;
        case 6:
        reajuste = 0.08;
        cargo = "Técnico de TI";
        break;
        default:
            console.log("\nCodigo de cargo invalido. ");

}

novoSalario = salario + (reajuste * salario);
        console.log(`\nNome do colaborador: ${nome}.\nCargo: ${cargo}.\nSalario: R$$${novoSalario.toFixed(2)}`);