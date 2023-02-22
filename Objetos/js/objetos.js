    // Objeto literal - produto
var produto = { // Nome do objeto: produto
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};
console.log(produto.id);
console.log(produto.nome);
console.log("R$" + produto.valor.toFixed(2)); // toFixed(2) - adicionar 2 casas decimais.
    // Criação do objeto literal
var cliente = { // Nome do objeto: cliente
    id: 40,
    nome: "Andre Silva", // chave: nome / valor: Andre Silva
    telefone: "(21)99999-8888"
};
console.log(cliente.id);
console.log(cliente.nome);
console.log(cliente.telefone)

var usuario = { // Nome do objeto: usuario
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};
var atendeClassificacao = usuario.idade >= 18;
if(atendeClassificacao === true) {
    console.log("O usuario pode assistir o conteudo");
}else {
    console.log("O usuarioa ainda nao pode assistir o conteudo");
}
    // Acessando propriedades de um objeto literal
// Propriedade - Relação de chave/valor q armazena um dado de um objeto
var produto = { // Nome do objeto: produto
// Propriedade é uma relação entre chave e um valor ou seja: (nome(chave da propriedade) "Cafeteira Eletrica"(valor da propriedade))
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};
console.log(produto.nome); // Imprimindo a propriedade que armazena o nome do produto.

// Calculo IMC aluno
var aluno_academia = {
    id: 10,
    nome: "Carlos Henrique",
    altura: 1.76,
    peso: 78.00
};
var imc_aluno = (aluno_academia.peso / (aluno_academia.altura * aluno_academia.altura)).toFixed(2);
if (imc_aluno < 18.5) {
    console.log("O aluno " + aluno_academia.nome + " está abaixo do peso com o IMC em: " + imc_aluno)
} else if(imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + aluno_academia.nome + " está com peso normal com o IMC em: " + imc_aluno)
} else {
    console.log("O aluno " + aluno_academia.nome + " está acima do peso com o IMC em: " + imc_aluno)
}

    // Coleção de Objetos
var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];
console.log(colecao_disciplinas[0].id) // 1
console.log(colecao_disciplinas[1].nome) // Matematica
console.log(colecao_disciplinas[6].carga_horaria) // 120

    // Aparecer uma série conforme o dia da semana
var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];
var data_atual = new Date();
var dia_semana = data_atual.getDay();
var serie_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_dia.nome;
var horario_serie = serie_dia.horario;
var sinopse_serie = serie_dia.sinopse;

console.log("Hj é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);