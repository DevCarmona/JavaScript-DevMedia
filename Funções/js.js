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

// FUNÇÕES SEM PARÂMETRO
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

//  FUNÇÕES COM PARÂMETRO
console.log("!Funções com parâmetro!")
console.log("")
//  Funções com parâmetro recebem valores para serem usados em seus blocos de cód. EX: function retornaAluno( a1, a2 ) "Entre os parênteses, temos 2 valores, significa dizer q se trata de uma função com parâmetro".
//  O uso de funções com parâmetro nos ajuda a reaproveitar um bloco de cód que recebe valores para usá-los em suas tarefas.
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

a1 = 8;
a2 = 7;

let stats1 = retornaAluno(a1, a2); // Pag do Aluno
console.log("Status: " + stats1);

let stats2 = retornaAluno(a1, a2); // Pag do Professor
console.log("Status do aluno: " + stats2);
console.log("")

//  ARROW FUNCTION
console.log("!Arrow Function!");
console.log("")
//  Arrow Function são funções escritas de forma diferente das funções tradicionais. Elas podem receberparâmetros ou não.
function retornaMedia ( n1, n2 ) { // Função tradicional.
    let media = (n1 + n2) / 2;
    return media;
}
let medAluno = retornaMedia(8, 9);
console.log("A média do aluno com função tradicional: " + medAluno);

const retorna_Media = (n1, n2) => (n1 + n2) / 2; // Arrow Function com 1 linha de cód.

let media_aluno = retorna_Media(9, 8);
console.log("A média do aluno com Arrow Function: " + media_aluno);
console.log("")

//  ARQUITETURA DO PROJETO
console.log("!Arquitetura do Projeto! Coleção Signos")
console.log("")
//  Criando a aplicação em camadas de complexibilidade
let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = ( signos, data ) => {    
    let ano = data.getFullYear();

    let data_inicio_signo = new Date( ano + "-" + signos[0]["DataInicio"] + " 00:00:00");
    let data_fim_signo = new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");

    if ( data >= data_inicio_signo && data <= data_fim_signo ) {
        return signos[0].Nome; // Outra maneira: return signos[0]["Nome"]
    }
}
let data_app = new Date("2020-02-07 00:00:00");

const nome_signo = retorna_signo(colecao_signos, data_app);
console.log("O signo do dia é: " + nome_signo);
