import entradaDados from 'readline-sync';
// import - Comando utilizado para importar um plugin
// entradaDados - É a forma como chamamos os recursos do plugin (pode ser qlqr nome)
// from - É a sintaxe do import, palavra chave que nos permite informar qual plugin queremos chamar.
// 'readline-sync' - Nome do plugin que iremos importar, o nome é o mesmo utilizado na instalação.

let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, " + nome);

/* 
    Instalando o readline-sync dentro da pasta que for usar
npm init-y
npm install readline-sync
abrir o package.json
add - "type":"module", (Antes do "main")
para rodar no terminal:
node readline.js
*/