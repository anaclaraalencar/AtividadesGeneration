const leia = require("readline-sync");

let produto;
let quantidade;
let valortotal;
let nomeProduto;

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n1 -- Cachorro quente.\nPreco unitario: R$10,00. ");
console.log("\n2 -- X-Salada.\nPreco unitario: R$15,00. ");
console.log("\n3 -- X-Bacon.\nPreco unitario: R$18,00. ");
console.log("\n4 -- Bauru.\nPreco unitario: R$12,00. ");
console.log("\n5 -- Refrigerante.\nPreco unitario: R$8,00. ");
console.log("\n6 -- Suco de Laranja.\nPreco unitario: R$13,00. ");


produto = leia.questionInt("\nDigite o codigo do produto: ");
quantidade = leia.questionInt("\nDigite a quantidade do produto: ");

switch (produto) {
  case 1:
    valortotal = quantidade * 10;
    nomeProduto = "Cachorro quente";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
  case 2:
    valortotal = quantidade * 15;
    nomeProduto = "X-Salada";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
  case 3:
    valortotal = quantidade * 18;
    nomeProduto = "X-Bacon";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
    case 4:
    valortotal = quantidade * 12;
    nomeProduto = "Bauru";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
    case 5:
    valortotal = quantidade * 8;
    nomeProduto = "Refrigerante";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
    case 6:
    valortotal = quantidade * 13;
    nomeProduto = "Suco de Laranja";
    console.log(`\nProduto:${nomeProduto} \nValor Total: R$${valortotal.toFixed(2)}`);
    break;
    default:
        console.log("\nProduto nao encontrado!)");
    
}



