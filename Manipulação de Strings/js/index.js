let nome = "Andre";

let texto = nome + " é um programador JS";
let resultado = texto.split("=");
console.log(resultado)
console.log("")
//  Extrair a palavra JavaScript de dentro do texto
let frase = "Estou aprendendo JavaScript na DevMedia";
let palavra = "";
let posicao_inicio = 17;
let posicao_fim = 26;

for ( let i = 0 ; i <= frase.length ; i++)
{
    if ( i >= posicao_inicio && i <= posicao_fim)
    {
        palavra += frase.charAt(i);
    }
}
console.log(palavra);
console.log("")
//  substring( posicaoInicial, posicaoFim) - Extrair a palavra JavaScript usando um metodo nativo
let fras = "Estou aprendendo JavaScript na DevMedia";
let posicaoInicial = 17
let posicaoFim = 27

let palav = fras.substring( posicaoInicial, posicaoFim);
console.log(palav)
console.log("")
//  Template String usando acento grave ``
let txt2 = `Aula de template string
    Basta quebrar linha aqui mesmo
    no proprio texto`;
console.log(txt2)
console.log("")
//  Template String sem utilizar acentos graves
let tecnologia = `JavaScript`
let txt = 'Aula e template \n';
txt += 'para criar um texto com quebra de linhas \n';
txt += 'precisamos utilizar barra n \n';
console.log(txt)
console.log("")
//  Template String concatenação $ { }
let nome1 = "Andre";
let tecno = "JavaScript";
let frase1 = `O programador ${nome1} domina ${tecno}.`;
let frase2 = "O programador " + nome1 + " domina " + tecno + ".";
console.log(frase1);    //  Usando template string
console.log(frase2);    //  Usando aspas duplas ou aspas simples
console.log("")
// Template String com switch
let linguagem = "JavaScript";
let stack = "mobile";

switch ( stack )
{
    case "beck-end":
        console.log(`Estude Noe.js para programação ${stack} em ${linguagem}`);
        break;
    case "front-end":
        console.log(`Estude React para programação ${stack} em ${linguagem}`);
        break;
    case "mobile":
        console.log(`Estude em React Native para programação ${stack} em ${linguagem}`);
        break;
    default:
        console.log(`Tecnologia indisponivel para ${stack}`);
        break;
}
console.log("")
//  toLowerCase / toUpperCase
let programador_1 = "Andre";
let programador_2 = "Carmona";

console.log(programador_1.toUpperCase());
console.log(programador_2.toLowerCase());
console.log("")
// JavaScript diferencia letras maiusculas e minusculas nos valores de variaveis
let prog1 = "Andre";
let prog2 = "andre";

if ( prog1 == prog2 )
{
    console.log("São iguais")
} else {
    console.log("São diferentes")
}
console.log("")
//  toLowerCase - email convertido para minusculo
let emailAcesso = "andre@gmail.com";
let emailCadastro = "ANDRE@gmail.com";

if ( emailAcesso.toLowerCase() == emailCadastro.toLowerCase())
{
    console.log("Foi enviado um link de ativação para o seu email");
} else {
    console.log("Esse email nao existe em nossa base de dados");
}
console.log("")
// trim() - Removendo espaços em branco do inicio e do final de uma string
let tel = "(11)99999-9999";
let tel1 = "   (11)99999-9999   ";

if ( tel ==  tel1 ) //  Sem usar o trim.
{
    console.log("Os telefones são iguais (sem usar o trim)")
} else {
    console.log("Os telefones nao são iguais (sem usar o trim)");
}

if ( tel.trim() == tel1.trim() )    //  Usando o trim.
{
    console.log("Os telefones sao iguais (usando trim)");
} else {
    console.log("Os telefones nao são iguais (usando trim)");
}
console.log("")
//  padStart e padEnd - .padStart(20, " "), string original mantida e adiciona espaços até as strings terem 20 caracteres
//  padStart: Metodo Nativo ; (20: total de caracteres que a string terá, " ": Caractere para preencher o inicio da String)
//  padEnd: Metodo Nativo ; (20: total de caracteres que a string terá, " ": Caractere para preencher no final da String)
let labelAluno = "Aluno";
let valorAluno = "Edmilson";

let labelGrau = "Grau de escolaridade";
let valorGrau = "Ensino Médio Completo";

let label = "Email: "
let email = "contato@email.com";

console.log(labelAluno.padStart(20, "-") + ": " + valorAluno);
console.log(labelGrau.padStart(20, "-") + ": " + valorGrau);

console.log(label.padEnd(20, "-") + email);
console.log("")
//  padEnd
let labelNome = "Nome:";
let valorNome = "Andre";

let labelEmail = "Email:";
let valorEmail = "email@email.com.br";

let labelTel = "Telefone:";
let valorTel = "(11)11111-1111";

console.log(labelNome.padEnd(10, "-") + valorNome);
console.log(labelEmail.padEnd(10, "-") + valorEmail);
console.log(labelTel.padEnd(10, "-") + valorTel);
console.log("")
//  replace() - Usado para substituir a primeira substring dentro de um texto por outra substring
 let textoReplace = " A linguagem PHP é uma linguagem poderosa em PHP";
 let resultadoReplace = textoReplace.replace("PHP", "JS");  //  Note que usei 2 PHP e ele substituiu somente a primeira.
 console.log(resultadoReplace);
 console.log("")
 // replace() - substitui a primeira ocorrencia encontrada
 let text = "Andre adora JavaScript! Ele faz exercicios de JavaScript todos os dias para aprender mais";
 let res = text.replace("JavaScript", "JS");
 console.log(res);
 console.log("")
 // substr() e substring() - Extrair uma palavra ou texto de um conteudo
 let frasee = "Estou aprendendo JavaScript na DevMedia";
 let resultado1 = frasee.substr(17, 10);//  nao soma com a primeira parte (17, 10)
 let resultado2 = frasee.substring(17, 27);//  soma com a primeira parte 17 + 10 = 27 (17, 27)
 console.log(resultado1);
 console.log(resultado2);
 console.log("")
 // substr() - Formar um resumo.
 let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";
let tamanho = conteudo.length;
let resum = "";

if ( tamanho > 100 )
{
    resum = conteudo.substr(0, 96);
    resum += "...";
} else {
    resum = conteudo;
}
console.log(resum);
console.log("")
//  indexOf() - Busca uma substring dentro da variavel e retorna a posição da substring dentro da string.
let fraseBrasil = "O Brasil é um país maravilhouses!";
let resultadoBrasil = fraseBrasil.indexOf("Brasil");

console.log(resultadoBrasil);// Brasil começa na posição 2
console.log("")
//  Exemplo prático indexOf(), trim() e toLowerCase()
let expressaoProibida = "passaporte falso";
let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLocaleLowerCase();

if ( comentario.indexOf(expressaoProibida) > -1 )
{
    console.log("No seu comentario ha palavras proibidas. Atualize seu comentario e envie novamente!");
} else {
    console.log("Seu comentario foi aprovado");
}
console.log(comentario);
console.log("")
//  split() - A cada espaço em branco que a string tiver, ele cria um novo elemento.
let paises_string = "Brasil Espanha Canadá Irlanda Suiça";
let paises_array = paises_string.split(" ");

console.log(paises_string);
console.log(paises_array);
console.log("")
//  split()
let cores_string = "vermelho,azul,branco,cinza,roxo";
let cores_array = cores_string.split(",");

console.log(cores_string);
console.log(cores_array);
console.log("")
//  split()
let nome_completo = "Ana Mendes da Silva";
let array = nome_completo.split(" ");
let nome2 = array[0];

console.log("Olá " + nome2 + ", seja bem vindo(a)");
console.log("")
//  Exercicio Manipulação String
let chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hesmifério sul ===";

console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros)
{
    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");

    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = "";

    switch (pico_mes) 
    {

        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default:        pico_mes_nome = "Mês inválido";    break;

    }
    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;
    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilometrs por segundo");

    console.log("Nome: ".padEnd(30, ".") + nome_chuva);
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");
}
console.log("")