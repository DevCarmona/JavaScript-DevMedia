import entradaDados from 'readline-sync';
// import - Comando utilizado para importar um plugin
// entradaDados - É a forma como chamamos os recursos do plugin (pode ser qlqr nome)
// from - É a sintaxe do import, palavra chave que nos permite informar qual plugin queremos chamar.
// 'readline-sync' - Nome do plugin que iremos importar, o nome é o mesmo utilizado na instalação.
let nome = entradaDados.question('Digite seu nome: '); 
// 1° Vamos declarar uma variavell - nome
// 2° Utilizamos o apelido definido no import - entradaDados
//3° Chamamos a função - question, faz parte do readline-sync e é ela quem implementa o input e recebe como parametro uma msg ex: ('Digite seu nome:')
console.log("Olá, " + nome + "\n");
/* 
    Instalando o readline-sync dentro da pasta que for usar
npm init-y
npm install readline-sync
abrir o package.json
add - "type":"module", (Antes do "main")
para rodar no terminal:
node readline.js
*/
console.log("Calculadora de soma entre x e y: \n");
let x = entradaDados.question("Informe o valor de x: ");
let y = entradaDados.question("Informe o valor de y: ");

let soma = Number(x) + Number(y); // Usando Number para transformar (soma)string em numero para conseguir calcular. 

console.log("O resultado da sua soma entre " + x + " + " + y + " = " + soma);