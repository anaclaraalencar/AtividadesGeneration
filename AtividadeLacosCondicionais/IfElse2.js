const leia = require('readline-sync');

let nome;
let idade;
let doacao;

nome = leia.question("\nDigite o nome do doador: ", {limitMessage: 'Por favor, digite um nome valido'});
idade = leia.questionInt("\nDigite a idade do doador: ", {limitMessage: 'Por favor, digite uma idade valida'});
doacao = leia.keyInYNStrict("\nPrimeira doacao de sangue?: ", {limitMessage: 'Por favor, se sim ou nao'});

if(idade >= 18 && idade <= 69){;
    
    if((idade >= 60 && idade <= 69) && doacao == true){;
        console.log(`${nome} nao esta apto para doar sangue!`);

    }else{ 
        console.log(`${nome} esta apto para doar sangue!`);

    }


}else{
    console.log("\nA idade nao e apta para doacao!");
}