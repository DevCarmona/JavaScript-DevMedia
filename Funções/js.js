//  funções - São blocos de códigos que executam alguma tarefa.
// Pq são uteis - Permitem que o cód possa ser reaproveitado em uma aplicação

function soma ( numero_1, numero_2 ) {
    return numero_1 + numero_2;
}
let resultado = soma(5,2);

console.log("Resultado de soma entre 2 numeros: " + resultado);
console.log("")

// Cód sem função para calcular a media de 2 ou mais alunos sem usar uma função, precisamos replicar o cód que faz o calculo dessa média.

let status_aluno1;
let media_aluno1 = (7 + 8) / 2;

if ( media_aluno1 >= 6 ) {
    status_aluno1 = "Aluno aprovado";
} else {
    status_aluno1 = "Aluno reprovado";
}
console.log(status_aluno1);

let status_aluno2;
let media_aluno2 = (4 + 7) / 2;

if ( media_aluno2 >= 6 ) {
    status_aluno2 = "Aluno aprovado";
} else {
    status_aluno2 = "Aluno reprovado";
}
console.log(status_aluno2);
console.log("")

// Cód com função, nesse caso criamos uma função e poemos usá-la quantas vezes precisarmos para fazer o cálculo da média.

function calcula_media ( n1, n2 ) {
    let media = (n1 + n2) / 2;
    let status;

    if ( media >= 6 ) {
        status = "Aluno aprovado";
    } else {
        status = "Aluno reprovado";
    }
    return status;
}

let statusaluno1 = calcula_media(7, 8);
console.log(statusaluno1);
let statusaluno2 = calcula_media(4, 7);
console.log(statusaluno2);
console.log("")

// Funções sem parâmetro
console.log("!Funções sem parâmetro!");
console.log("")
//  Parametro é um valor que uma função recebe para usar no seu bloco de código.
//  Funções sem parâmetro não vão receber valores para executar em seus blocos de cód. EX: function retorna_versao() "nada dentro dos parenteses, função sem parâmetro".
//  Exemplo defunção sem parâmetro.
//  Reaproveitando a função em diferentes partes da aplicação
function retorna_versao () {
    return 1.1;
}
let versao = retorna_versao(); // Atribuímos na variável versao a função que nos retorna a versão de uma aplicação
let texto_versao = "Versão aplicação: " + versao; // Informação do painel administrativo
let txt_versao = "Aplicação DevMedia - Versão: " + versao; // Rodapé da aplicação
console.log(versao);
console.log(texto_versao);
console.log(txt_versao);
console.log("")

//  Funções com parâmetro
console.log("!Funções com parâmetro!")
console.log("")
//  Funções com parâmetro recebem valores para serem usados em seus blocos de cód. EX: function retornaAluno( a1, a2 ) "Entre os parênteses, temos 2 valores, significa dizer q se trata de uma função com parâmetro".
function retornaAluno ( a1, a2 ) {
    let md = (a1 + a2) / 2; // 2 parametros usaos para o calc da média.
    let stats; // Variável que vai guardar o status do aluno.

    if ( md >= 7 ) { // Condição que verifica se a média é >= 6.
        stats = "Aluno aprovado";
    } else {
        stats = "Aluno reprovado";
    }
    return stats; // A função retorna o status do aluno.
} // image.png
let statsAluno1 = retornaAluno(7, 8);
console.log("Aluno 1: " + statsAluno1);

let statsAluno2 = retornaAluno(4, 7);
console.log("Aluno 2: " + statsAluno2);
