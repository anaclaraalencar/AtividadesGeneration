const leia = require('readline-sync');

const matrizNotas = [];

console.log("Digite as notas dos alunos:");

for (let i = 0; i < 10; i++) {
    console.log(`\nAluno ${i + 1}:`);
    const notas = [];
    for (let j = 0; j < 4; j++) {
        const nota = leia.questionFloat(`Nota do ${j + 1} bimestre: `);
        notas.push(nota);
    }
    matrizNotas.push(notas);
}


const vetorMedias = [];

for (let i = 0; i < matrizNotas.length; i++) {
    const notasParticipante = matrizNotas[i];
    const somaNotas = notasParticipante.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / 4;
    vetorMedias.push(media.toFixed(1)); 
}


console.log("\nMédias dos participantes:");
console.log(vetorMedias.join("\n"));
