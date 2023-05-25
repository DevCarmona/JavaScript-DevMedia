        //  String com uma data
let stringData = "Titulo - String com uma data...";
//  Titulo
console.log(stringData.padStart(39, " "));

const exemplo1 = new Date("2020-02-28");
const exemplo2 = new Date("2020-02-27 10:35:00");

console.log(exemplo1);
console.log(exemplo2);
console.log("")

        //  Numeros
let numeros = "Titulo - Numeros...";
//  Titulo
console.log(numeros.padStart(27, " "));

const exemplo3 = new Date( 2020, 2, 28, 13, 20, 2, 15 );
const exemplo4 = new Date( "ano", "mes", "dia", "hora", "minuto", "segundo", "milissegundo");

console.log(exemplo3);
console.log(exemplo4);
console.log("")

        //  UTC (Tempo Universal Coordenado) - Referência para calcular fuso horario
let utc = "Titulo - UTC (Tempo Universal Coordenado) - Referência para calcular fuso horario...";
//  Titulo
console.log(utc.padStart(92, " "));

const hoje = new Date();
const dataDaPostagem = new Date('2020-11-11T13:34:48.835Z');

console.log(hoje);

//  String com a data e a hora local
console.log( hoje.toLocaleString() );

//  String com a data armazenada
console.log( hoje.toString() );

//  String com a data universal (UTC)
console.log( hoje.toUTCString() );

//  timestamp
console.log( hoje.valueOf() );

//  Data da Postagem
console.log(dataDaPostagem);

// Data no Brasil
console.log(hoje.toUTCString());console.log(dataDaPostagem.toLocaleString());
console.log("")

        //  Timestamp - Representação numérica de uma data UTC - Verificar quanto tempo se passou entre uma data e outra
let timeStamp = "Titulo - Timestap Representação numérica de uma data UTC...";

//  Titulo
console.log(timeStamp.padStart(68, " "));

const hoje1 = new Date();
const hoje2 = new Date("2020-11-09 01:01:09");

//  Exibindo a alteração do timestamp da data
console.log(hoje2.toDateString());

hoje2.setTime(886302309000);
console.log(hoje2.toDateString());

//  Exibindo o valor retornado é a quantidade de milissegundos que se passaram desde Unix Epoch ( 1 de janeiro de 1970 às 00:00:00)
console.log(hoje1.valueOf());
console.log("")

        //  Timestamp - Representação numérica de uma data UTC - Verificar quanto tempo se passou entre uma data e outra
let timeStampT = "Titulo - Timestap Verificar quanto tempo se passou entre uma data e outra...";
//  Titulo
console.log(timeStampT.padStart(86, " "));

const dataAtual = new Date();
const dataAtual1 = new Date('2020-11-09 18:43:57');
const dataPostagem = new Date('2020-11-11T00:00');

//  Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

//  Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

//  Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

//  Exibindo a diferença
console.log(horas);
console.log("")

        //  Getters

//  Exibindo o ano
console.log(dataAtual. getFullYear());

//  Exibindo o mês (0 à 11)
console.log(dataAtual.getMonth());

//  Exibindo o dia do mês
console.log(dataAtual.getDate());

//  Exibindo a hora (0 à 23)
console.log(dataAtual.getHours());

//  Exibindo os minutos (0 à 59)
console.log(dataAtual.getMinutes());

//  Exibindo os segundos (0 à 59)
console.log(dataAtual.getSeconds());

//  Exibindo os milisegundos (0 à 999)
console.log(dataAtual.getMilliseconds());

//  Exibindo o dia da semana (0 à 6)
console.log(dataAtual.getDay());

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );

//  Exibindo o timestamp da data
console.log(dataAtual.getTime());

//  Exibindo o timestamp em minutos a diferença de fuso horário
//  Representa 180 minutos de diferença de fuso horário do computador (nesse caso Rj) para UTC
console.log(dataAtual.getTimezoneOffset());

//  Exibindo o timestamp do valor primitivo do objeto
console.log(dataAtual.valueOf());

//  Exibindo uma string com a data
console.log(dataAtual.toDateString());

//  Exibindo uma string com o tempo
console.log(dataAtual.toTimeString());

//  Exibindo uma string com data e hora (String que representa o objeto)
console.log(dataAtual.toString());

//  Exibindo uma string com um formato universal (ISO 8601)
console.log(dataAtual.toISOString());

//  Exibindo o horario, será sempre com o fuso horario 0
console.log(dataAtual1.toISOString());

//  Exibindo uma string com apenas a data e o tempo
console.log(dataAtual1.toLocaleString());

//  Exibindo uma string com a data apenas
console.log(dataAtual1.toLocaleDateString());

//  Exibindo uma string com o tempo apenas
console.log(dataAtual1.toLocaleTimeString());
console.log("")

        //  Getters de Conversão
let gett = "Titulo - Getters de Conversão";
//  Titulo
console.log(gett.padStart(39, " "));

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const options1 = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
const options3 = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'

};

//  Exibindo data com formato portugues ('pt-br', options) / 'pt-br' = O idioma ; options = Objeto com a forma que cada valor será retornado
console.log(dataAtual.toLocaleDateString('pt-br', options));

//  Exibindo hora em formato americano ('en-US', options) / 'en-US' = O idioma ; options = Objeto com a forma que cada valor será retornado
console.log(dataAtual.toLocaleTimeString('en-US', options1));

//  Exibindo o dia, data e hora com formato em portugues ('pt-br', options) / 'pt-br' = O idioma ; options = Objeto com a forma que cada valor será retornado
console.log(dataAtual.toLocaleString('pt-br', options3));

//  Valores do parametro options (toLocaleString e toLocaleDateString)
/*
    weekday: 'long' - "Segunda-Feira"
    weekday: 'short' - "Seg"
    weekday: 'narrow' - "S"

    month: "numeric" - 2
    month: "2-digit" - 02
    month: "long" - Março
    month: "short" - Mar
    month: "narrow" - M

    day: 'numeric - 1
    day: 'numeric - 01

    year: 'numeric' - 2020
    year: '2-digit' - 20

    dateStyle: "full" - segunda-feira, 9 de novembro de 2020
    dateStyle: "long" - 9 de novembro de 2020
    dateStyle: "medium" - 9 de nov. de 2020
    dateStyle: "short" - 09/11/2020

    hour:"numeric" - 1
    hour:"2-digit" - 01

    minute:"numeric" - 1
    minute:"2-digit" - 01

    second:"numeric" - 1
    second:"2-digit" - 01

    timeStyle: "full" - 01:05:09 Horario Padrao de Brasilia
    timeStyle: "long" - 01:05:09 BRT
    timeStyle: "medium" - 01:05:09
    timeStyle: "short" - 01:05
    
*/

const dataAtual2 = new Date();

const mesAno = {
    month: "numeric",
    year: 'numeric'
};

//  Exibindo apenas mes e ano, 4/2023
console.log(dataAtual2.toLocaleString('en-US', mesAno));

const semanaHora = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric" 
};

//  Exibindo apenas o dia e a hora, quinta feira 14:27
console.log(dataAtual2.toLocaleString("pt-BR", semanaHora));

const dataAtual3 = new Date();

const personalizandoData = {
    weekday: 'long',
    month: "2-digit",
    year: '2-digit',
    day: '2-digit'
};

const personalizandoTempo = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const personalizandoDataTempo = {
    dateStyle: "medium",
    timeStyle: "short"
};

const mesAno1 = {
    month: "numeric",
    year: 'numeric'
};

const semanaHora1 = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric'
};

console.log(dataAtual3.toLocaleDateString('pt-BR', personalizandoData));
console.log(dataAtual3.toLocaleTimeString('pt-BR', personalizandoTempo));
console.log(dataAtual3.toLocaleString('pt-BR', personalizandoDataTempo));
console.log(dataAtual3.toLocaleString('pt-BR', mesAno1));
console.log(dataAtual3.toLocaleString('pt-BR', semanaHora1));
console.log("")

        //  Setters - Alterar algumas informações sobre a data
let setters = "Titulo - Setters";
//  Titulo
console.log(setters.padStart(10, " "));

const dataAtual4 = new Date();

dataAtual4.setFullYear(1998);
console.log(dataAtual4);

dataAtual4.setMonth(5);
console.log(dataAtual4);

dataAtual4.setHours(11);
console.log(dataAtual4);

dataAtual4.setUTCFullYear(1988);
console.log(dataAtual4);
console.log("")

    //  Praticando
let praticando1 = "Título - Praticando"
console.log(praticando1.padStart(30, " "))

const dataUltimoAcesso = new Date('2020/11/11 17:00:00');
const dataAtual5 = new Date();

const hora1 = dataAtual5.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual1 = dataAtual5.getTime();

const diferencaTime = timeAtual1 - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if ( hora1 < 6 || hora1 >= 18 )
    {
        msg = 'Boa noite\n';
    }   else if ( hora1 >= 6 && hora1 < 12 ) {        
            msg = 'Bom dia\n';
        } else {
            msg = 'Boa tarde\n';
        }

if ( diferencaTime > milissegundosDia )
    {
        msg += "Você está ausente há dias!!!";
    }   else if ( diferencaTime > milissegundosHora) {
            msg += "Você está ausente há horas!!!";
        }   else {
            msg+= "Que bom que ainda está aqui!";
        }
console.log(msg);
console.log("")

        //  EXERCICIOS
const exercicios = "Título - Exercicios";
console.log(exercicios.padStart(30, " "))

const dataAtual9 = new Date();

const options9 =  
    {
          
        weekday : 'long',          
        year : "numeric",          
        month : 'numeric',          
        day : '2-digit',
    };
        
console.log(dataAtual9.toLocaleDateString('en-US', options9));
console.log("")

//

const plataforma = 'Mobile';
let msg5 = "";

switch (plataforma) {
  case 'Mobile':
    msg5 = 'React Native e Flutter';
    break;

  case 'Web':
    msg5 = 'Angular, React e Vue.js';
    break;

  case 'Back-end':
      msg5 = 'Laravel, .NET e Spring';
      break;

  default:
    msg5 = 'Plataforma não disponível';
}

console.log(msg5);
console.log("")

//

const dataAtual12 = new Date();

const diaSemana = dataAtual12.getDay();
const diaMes = dataAtual12.getDate();

if ( diaSemana == 5 && diaMes == 13 ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana == 5 ) {
  console.log('Sextou!!!');
}

//

const jogos = [
    { id: 1, nome: 'Resident Evil 7', preco: 250 },
    { id: 2, nome: 'God of War', preco: 300 },
    { id: 3, nome: 'Stronghold Warlords', preco: 280 },
  ];
  
  let total = 0;
  
  for ( let i = 0; i < jogos.length ; i++ ) {
    total += i;
  };
  
  console.log(total);
console.log("")
//

const dt = new Date()

console.log(dt.getMilliseconds())
console.log("")

//

const titulo = 'Linguagem JavaScript';
const maxCaracteres = 50;

if (maxCaracteres > titulo.length) {
  console.log('Título válido');
} 
else {
  console.log('O limite de caracteres para o título:' + maxCaracteres);
}
console.log("")

//

const jogos6 = ["Stronghold", "Stronghold Crusader", "Stronghold II"];

let i = 0;

while ( i < jogos6.length ) {
  
console.log (jogos6[i]);
  i++;
}
console.log("")

//

const usuario = 'Fabiana Teles';
const limiteChar = 10;

const validaCampo = usuario.length <= limiteChar;

if ( validaCampo ) {
  console.log('Dados válidos');
} else {
  console.log('O limite de caracteres é:' + limiteChar);
}
console.log("")

// Crie um código para verificar se a data atual do sistema é uma sexta-feira 13 (utilize as variáveis diaSemana e diaMes para isso).
// Caso não seja sexta-feira 13 verifique se é sexta-feira e imprima 'Sextou!!!'.
// Utilize o operador de igualdade estrita que verifica se um valor é igual tanto em tipo quanto em valor.

const dataAtual11 = new Date();

const diaSemana3 = dataAtual11.getDay();
const diaMes3 = dataAtual11.getDate();

if ( diaSemana3 == 13 && diaSemana3 == 5 ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana3 == 2 ) {
  console.log('Sextou!!!');
}
console.log("")

// Qual alternativa completa o código abaixo para imprimir a quantidade de convidados incluindo a quantidade que bebe ou não cerveja?

const convidados = [
    { nome: 'José', cerveja: false},
    { nome: 'Augusto', cerveja: true},
    { nome: 'Tomas', cerveja: true},
    { nome: 'Joana', cerveja: false},
    { nome: 'Aline', cerveja: false},
  ];
  
  let totalDeConvidados = convidados.length;
  let bebemRefrigerante = 0;
  let bebemCerveja = 0;
  
  for ( const convidado of convidados) {
    if ( convidado.cerveja == true ) {
      bebemCerveja++;
    } else {
      bebemRefrigerante++;
    }
  }
  
  console.log('Convidados: ' + totalDeConvidados);
  console.log('Bebem cerveja: ' + bebemCerveja);
  console.log('Bebem refrigerante: ' + bebemRefrigerante);
  console.log("")

// Qual alternativa completa o código abaixo para imprimir as matérias concluídas?

const tecnologias = [
    { materia: "JavaScript", concluido: true },
    { materia: "React Native", concluido: false },
    { materia: "React", concluido: true },
    { materia: "Vue.js", concluido: true },
    { materia: "Angular", concluido: false },
  ];
  
  for ( const i in tecnologias ) {
    if ( tecnologias[i].concluido ) {
      console.log( tecnologias[1].materia );
    }
  }
  console.log("")

// Qual alternativa imprime a diferença em minutos do fuso horário da data local:

const dataLocal =  new Date();

console.log(dataLocal.getTimezoneOffset());
console.log(dataLocal.getTime()); // Errado
console.log(dataLocal.getMinutes());
console.log("")

// Complete o código abaixo para verificar se a quantidade de caracteres do título é válida. A quantidade máxima de caracteres deve ser 50. Utilize uma propriedade para retornar a quantidade de caracteres da variável titulo e assim fazer a verificação.

const titulo9 = 'Linguagem JavaScript';
const maxCaracteres9 = 50;

if ( titulo.length <= maxCaracteres9 ) {
  console.log('Título válido');
} else {
  console.log('O limite de caracteres para o título:' + maxCaracteres9);
}
console.log("")

// Qual alternativa completa o código abaixo para imprimir as horas, minutos e segundos?

const data15 = new Date();
console.log( data15.toLocaleTimeString());
console.log( data15.getHours() + ':' + data15.getMinutes() + ':' + data15.getSeconds());
console.log( data15.toLocaleString('en-US', {timeStyle: 'medium'}));
console.log("")

// Crie um código para verificar se a fatura do cartão já foi fechada.
// - Armazene o timestamp da dataAtual e dataFechamento em tempoAtual e tempoFechamento.
// - Verifique se diferencaTime é maior ou igual a milissegundosDia.

const dataAtual16 = new Date('2020-01-11');
const dataFechamento = new Date('2020-01-10');

const tempoAtual16 = dataAtual16.getTime();
const tempoFechamento = dataFechamento.getTime();

const diferencaTime16 = tempoAtual16 - tempoFechamento;

const milissegundosDia16 = 1000 * 60 * 60 * 24;

if ( diferencaTime16 >= milissegundosDia16 ) {
  console.log( "Sua fatura já foi fechada!!!" );
} else {
  console.log( "Ainda não fechamos a fatura do seu cartão" );
}
console.log("")

// Crie um código para soletrar a variável jogoDoAno. Execute o loop enquanto index for menor que a quantidade de letras da variável jogoDoAno.

const jogoDoAno = "Stronghold Crusader";
let index = 0;

do {
  console.log( jogoDoAno[index]);
  index++;
} while (index < jogoDoAno.length);
console.log("")

// Crie um código que some as notas dos alunos e imprima a média:
//- qntAlunos recebe a quantidade de elementos do array alunosAv1. (Utilize uma propriedade para isso).
//- A média é o resultado da divisão da soma das notas pela quantidade de alunos.

const alunosAv1 = [
    { nome: 'Ana', nota: 7},
    { nome: 'Maria Eduarda', nota: 2},
    { nome: 'Tiago', nota: 8},
    { nome: 'Yuri', nota: 3},
  ];
  
  const qntAlunos =alunosAv1.length;
  let somaNotas = 0;

  for ( const aluno of alunosAv1 ) {
    somaNotas += aluno.nota;
  }
  const media = somaNotas / qntAlunos;

  console.log(media)
  console.log("")

// Some os valores dos produtos do array jogos e imprima na tela. Utilize uma propriedade para contar quantos elementos tem no array jogos:

const jogos19 = [
    { id: 1, nome: 'Resident Evil 7', preco: 250 },
    { id: 2, nome: 'God of War', preco: 300 },
    { id: 3, nome: 'Stronghold Warlords', preco: 280 },
  ];
  
  let total19 = 0;

  for ( let intex = 0 ; intex < jogos19.length ; intex++ ) {
    total19 += jogos19[intex].preco;
  }
  console.log(total19)
  console.log("")

// Qual alternativa completa o código abaixo para imprimir um timestamp?

const hoje21 = new Date('2020-12-12');

console.log(hoje21.getTime());
console.log("")

// Qual alternativa descreve o erro do código abaixo?

const serie = 8;
let mensalidade = 0;

if ( serie <= 3 ) {
  mensalidade = 1000;
} else if ( serie <= 6 ) {
  mensalidade = 1200;
} else {
  mensalidade = 1300;
}

console.log(mensalidade);// Codigo correto
console.log("")

// Verifique a média do usuário e imprima:
//- "Parabéns você foi aprovado" caso a média seja maior ou igual a 6.
//- "Ops! Infelizmente não foi dessa vez" nos demais casos.

const av1 = 8;
const av2 = 7;
const av3 = 5;

let media22 = (av1 + av2 + av3) / 3;
let stats;

if ( media22 >= 6) {
    stats = "Parabéns você foi aprovado";
} else {
    stats = "Ops! Infelizmente não foi dessa vez";
}
console.log(stats);
console.log("")

// 

const ingredientes = ['açúcar', 'farinha de trigo', 'ovo'];

for ( const index1 in ingredientes) {
    console.log(index1 + ' - ' + ingredientes[index1]);
}
console.log("")

//

const dtInicio = new Date("2020-12-01");

console.log(dtInicio.toString());
console.log("")

// Qual alternativa completa o código abaixo para imprimir respectivamente o ano, mês e a hora atual?

const produtos = [ 'Samsung x40', 'iPhone X', 'HD SSD'];

for (const produto of produtos) {
    console.log(produto);
  }
console.log("")

// Crie uma a variável 'dataAtual' que recebe a data atual do sistema. Em seguida crie a variável ano que recebe o ano armazenado em 'dataAtual'. Imprima a variável ano.

const dataAtual22 = new Date();
const ano = dataAtual22.getFullYear();

console.log(ano);
console.log("")

// Crie um código para verificar se a data atual do sistema é uma sexta-feira 13 (utilize as variáveis diaSemana e diaMes para isso).
// Caso não seja sexta-feira 13 verifique se é sexta-feira e imprima 'Sextou!!!'.
// Utilize o operador de igualdade estrita que verifica se um valor é igual tanto em tipo quanto em valor.

const dataAtual0 = new Date();

const diaSemana0 = dataAtual0.getDay();
const diaMes0 = dataAtual0.getDate();

if ( diaMes0 === 13 && diaSemana0 === 5) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana0 === 5) {
  console.log('Sextou!!!');
}
console.log("")

// Imprima as linguagens de programação e suas versões. Utilize for...of:

const linguagens = [
  { id: 1, nome: 'PHP', versaoAtual: 7.5 },
  { id: 2, nome: 'C#', versaoAtual: 9 },
];

for (const linguagem of linguagens) {
  console.log( linguagem.nome + ': ' + linguagem.versaoAtual);
};
console.log("")

// Crie um código que armazene a data atual do sistema e que altera respectivamente:
// - A hora para 20;
// - Os minutos para 0;
// - Os segundos para 0.

const hj = new Date();

hj.setHours (20);
hj.setMinutes(0);
hj.setSeconds(0);

console.log(hj.toLocaleDateString());
console.log("")

// Qual linha gera erro no código a seguir:

const hj1 = new Date();

hj1.setHours( 20 ) ;
hj1.setMinutes( 0 ) ;
hj1.setSeconds( 0 ) ;

console.log(hj1.toLocaleTimeString());
console.log("")

// Baseado no código abaixo qual alternativa executa sem gerar erros?

const prod = [ 'Samsung x40', 'iPhone X', 'HD SSD'];

for (const produ of prod) {
  console.log(produ);
}
for (let i = 0; i < prod.length; i++) {
  console.log(prod[i])
}
for (const index in prod) {
  console.log(index, prod[index]);
}
console.log("") // Todas corretas

// Qual alternativa manipula a variável dataHoje para imprimir a data completa?

const dataHoj =  new Date();

console.log(dataHoj.valueOf());
console.log(dataHoj.toTimeString());
console.log(dataHoj.toDateString());
console.log(dataHoj.toString()); // Correto
console.log("")

// Crie um código que recebe a data atual, armazena o dia da semana e o dia do mês para verificar se é sexta-feira 13:

const datAt = new Date();

const diaSem = datAt.getDay();
const diaMe = datAt.getDate();

if ( diaSem == 5 && diaMe == 13 ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSem == 5 ) {
  console.log('Sextou!!!!!');
}
console.log("")

// Qual alternativa completa o código abaixo para imprimir cada valor do array 'jogos':

const jgs = ["Stronghold", "Stronghold Crusader", "Stronghold II"];

let iw = 0;

while ( iw < jgs.length ) {
  console.log(jgs[iw]);
  iw++;
}
console.log("")

// Crie um código que armazena a data atual do sistema na variável 'hoje'. A variável 'diferencaHoras' recebe em minutos a diferença de fuso horário da data armazenada na variável 'hoje' e divide por 60. No final o código imprime a quantidade de horas de diferença.

const hoj = new Date();
const difeHora = hoj.getTimezoneOffset() / 60;

console.log('Diferença de horário: ' + difeHora + ' horas');
console.log("")