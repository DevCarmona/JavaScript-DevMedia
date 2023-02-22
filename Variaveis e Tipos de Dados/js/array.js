// Declarando um array
var estados = ["RJ", "SP", "BH"];

console.log(estados);
console.log(estados[0]); // Pegando a variavel na posicao 0 do array
// Alterar SP para PR
var estado = "PR";
estados[1] = estado;
console.log(estados);
// Alterar BH para PA
estados[2] = "PA";
console.log(estados);

// array para armazenar tipos de dados diferentes
var titulo = "Programador";
var quantidadeVaga = 5;
var vagaAtiva = true;
var vaga = ['Programador JS', 5, true];
console.log(vaga);

// .length - Contando a quantidade de elementos dentro da array
var linguagens = ["JS", "PHP", "JAVA", "C#"];
console.log(linguagens.length); // Vai imprimir - 4

// mais de 1 telefone na array
var telefones = [
    '(11)98899 - 8787',
    '(22)3455 - 8819'
];
console.log(telefones);
document.getElementById('texto').innerHTML ="Telefones: " + telefones;