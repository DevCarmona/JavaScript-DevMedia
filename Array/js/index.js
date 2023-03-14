// Arrays são coleções de dados
// Coleção - Dados de um msm dominio agrupados em uma variavel
// Array - Estrutura para agrupar dados em uma única variável
// Utiliza Colchetes na sua sintaxe

var programaores = [    // Coleção programadores
    "Andre",
    "Bruno",
    "Henrique"
];

var produtos = [    // Coleção produtos
    "Note",
    "Tv",
    "Cel"
]

var notas_alunos = [ 8, 7, 6 ]; // Coleção notas_alunos

var funcionario = [         // Coleção funcionario
    "Andre",                // Nome
    34,                     // Idade
    'andreemail@email.com'  // Email
]

var meses = [   // Coleção meses
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

var alunos = [  // Coleção alunos
    "Andre",
    "Elvis",
    "Felipe",
    "Thiago",
    "Lucas"
]

console.log(alunos[3]); // Índice - o que está entre colchetes

var notas_bimestre = [
    7, 6, 8, 5
]
var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;
console.log(media_aluno);

// Alterando os elementos
var disciplinas = [
    "Portugues",
    "Matematica",
    "Historia",
    "Fisica",
    "Quimica"
]
disciplinas[3] = "Biologia";
console.log(disciplinas)

var funcionarios = [
    "Andre",
    "Bruno",
    "Jorge",
    "Henrique"
]
var novos_funcionarios = [
    "Guilherme",
    "Jessica"
]
funcionarios[0] = novos_funcionarios[1]
funcionarios[3] = novos_funcionarios[0]
console.log(funcionarios);
console.log(funcionarios.length)
console.log(novos_funcionarios.length)

// Praticando
var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];
var data_atual = new Date();
var numero_escolhido = data_atual.getDate();
console.log("Numero sorteado: " + numero_escolhido);
numero_escolhido--;
var frases_do_dia = frases_do_dia[numero_escolhido];
console.log("Frase do dia");
console.log(frases_do_dia);