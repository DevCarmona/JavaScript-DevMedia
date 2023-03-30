// Escrevendo a msm coisa de 2 formas diferentes

for (let cont = 0 ; cont < 10 ; cont++)
{
    console.log("O número é: " + cont);
}

let contador = 0;
while ( contador < 10)
{
    console.log("O número é: " + contador);
    contador++;
}
// Escrevendo a msm coisa de 2 formas diferentes
for (let cont = 0 ; cont < 5 ; cont++)
{
    console.log(cont + " é menor que 5");
}

let contador1 = 0;
while (contador1 < 5)
{
    console.log(contador1 + " é menor que 5");
    contador1++;
}

//Reaproveitando codigo com for
let valor_produto = 500
for (cont1 = 1 ; cont1 <= 5 ; cont1++)
{
    let valor_parcela = valor_produto / cont1;
    console.log("N° de parcelas: " + cont1 + "\nValor da parcela: R$" + valor_parcela.toFixed(2));
}
// Repetição com For - número de parcela informado
let v_produto = 3500;
let t_parcela = 3;
for (cont2 = 1 ; cont2 <= t_parcela ; cont2++)
{
    let v_parcela = v_produto / cont2;
    console.log("N° de parcelas: " + cont2 + "\nValor da parcela: R$" + v_parcela.toFixed(2));
}
// Repetição com While - número de parcela informada (contador sempre dentro do bloco)
let vproduto = 200;
let tparcela = 8;
let cont3 = 1;
while ( cont3 <= tparcela )
{
    let vparcela = vproduto / cont3;
    console.log("N° de parcelas: " + cont3 + "\nValor da parcela: R$" + vparcela.toFixed(2));
    cont3++; // Apesar do incremento n "fazer parte" da sintaxe do bloco ele é necessario para que a variável seja incrementada.
}

// Repetição com While - Tabuada (contador sempre dentro do bloco)
let numero = 3;
let tcont = 0;
console.log("N° da tabuada do " + numero);
while (tcont <= 10)
{
    let resultado = numero * tcont;
    console.log(numero + " x " + tcont + " = " + resultado);
    tcont++;
}
// Repetição com for - Tabuada
let tnumero = 5;
console.log("Tabuada do " + tnumero);
for (fcont = 0 ; fcont <= 10 ; fcont++)
{
    let fresultado = tnumero * fcont;
    console.log(tnumero + " x " + fcont + " = " + fresultado);
}
// Repetição com while - Juros Composto (contador sempre dentro do bloco)
let capitalEmprestado = 3000;
let taxaJuros = 0.02; // 2% de juros
let jCont = 1;
let parcelasTotais = 5;

while ( jCont <= parcelasTotais )
{
    let numeroParcela = jCont
    let jurosEmprestimo = capitalEmprestado * taxaJuros * numeroParcela;

    console.log("A taxa de juros no periodo de " + numeroParcela + " Mes(es) é de R$" + jurosEmprestimo + ",00");

    jCont++;
}
// Repetição com for - Juros Composto
let capEmprestado = 5000;
let taxJuros = 0.05; // 5% de juros
let parcelasTot = 5;

for ( fcont= 1 ; fcont <= parcelasTot ; fcont++ )
{
    let numParcela = fcont;
    let resJuros = capEmprestado * taxJuros * numParcela;

    console.log("A taxa de juros no periodo de " + numParcela + " Mes(es) é de R$" + resJuros.toFixed(2));
}

// Loop com while - Decremento (contador sempre dentro do bloco)
let lcont = 10;

while ( lcont >= 0 )
{
    console.log(lcont);
    lcont--;
}
// Loop com for - Decremento
for ( fcont = 10 ; fcont >= 0 ; fcont--)
{
    console.log(fcont);
}
// Estrutura repetição While - Percorrendo Array
let paises = ["\n", "Brasil", "Suiça", "Inglaterra", "China"];
let pcont = 0;

while ( pcont < paises.length){
    console.log(paises[pcont]);
    pcont++;
}
// Estrutura repetição for - Percorrendo Array
let country = ["\n", "Brasil","Argentina", "Croacia"];

for (ccont = 0 ; ccont < country.length ; ccont++)
{
    console.log(country[ccont]);
}
// Estrutura repetição while - par ou impar
let numeros = [10, 5, 7, 8, 9, 6, 12, 4];
let tot_impar = 0;
let tot_par = 0;
let cont = 0;

while ( cont < numeros.length )
{
    if ( numeros[cont] % 2 == 0 )
    {
        tot_par++;
    }
    else
    {
        tot_impar++;
    }
    cont++;
}   
console.log("\nTotal de pares é: " + tot_par);
console.log("Total de impares é: " + tot_impar);
//Estrutura repetição while - Percorrendo Array total alunos
let alunos = ["\n", "Andre", "Joao", "Cezar", "Sergio"];
let conta = 0;

while ( conta < alunos.length )
{
    let aluno_online = alunos[conta];
    console.log(aluno_online);
    conta++
}
//Estrutura repetição for - Percorrendo Array total alunos
let alun = ["\n", "Andre", "Jorge", "Jaum", "Pedro"];

for ( contad = 0 ; contad < alun.length ; contad++ )
{
    let alunos_online = alun[contad];
    console.log(alunos_online);
}
//  Estrutura de repetição for - Tabuada
let multiplicador = 8;
console.log("Tabuada do n° " + multiplicador);

for ( let mcont = 0 ; mcont <= 10 ; mcont++)
{
    let resultado = multiplicador * mcont;
    console.log(mcont + " x " + multiplicador + " = " + resultado);
}
//  Estrutura de repetição for - Meses
let fmeses = ["\nJaneiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for ( let fcont = 0 ; fcont <= fmeses.length; fcont++)
{
    console.log(fmeses[fcont]);
}
//  Estrutura de repetição for - funcionarios com break
//  Interrompe todo o laço e repetição
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];
let encontrouHabilitado = false;

for ( let econt = 0 ; econt < funcionarios.length ; econt++ )
{
    let funcionario = funcionarios[econt];

    if ( funcionario.habilitado == true)
    {
        console.log("Funcionario habilidato encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
}
if ( !encontrouHabilitado )
{
    console.log("Nenhum funcionario habilitado encontrado");
}
//  Estrutura de repetição for - alunos com continue
// interrompe o loop atual
let falunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

for ( let fcont = 0 ; fcont < falunos.length ; fcont++ )
{
    let faluno = falunos[fcont];

    if ( faluno < 6 )
    {
        continue;
    }
    console.log("\nId: " + faluno.id);
    console.log("Nome: " + faluno.nome);
    console.log("Media: " + faluno.media);
}
let notasTrimestrais = [7, 8, 6, 5]
let somaNotas = 0;
const quantidadeNotas = 4;

for ( let ncont = 0 ; ncont < quantidadeNotas ; ncont++ )
{
    somaNotas = somaNotas + notasTrimestrais[ncont];
}
let media = somaNotas / quantidadeNotas;

if ( media >= 7 )
{
    console.log("Aprovado, media trimestral: " + media);
} else
  {
    console.log("Reprovado, media trimestral: " + media);
  }
//  Estrutura de repetição for
//  Objeto: aluno ; Propriedades: nome, email e idade / Objeto: turma ; Propriedades: nome e ano.
//  let aluno = { nome: "Marcos", email: "marcos@gmail.com", idade: 25 };
//  let turma = { nome: "2130A", ano: 2021 };
//  Exemplo Sem Propriedades usa colchete
let exaluno = ["Marcos", "marcos@gmail.com", 25];
let exturma = ["2130A", 2021]

console.log(" ");
console.log("Nome: " + exaluno[0]);
console.log("Email: " + exaluno[1]);
console.log("Idade: " + exaluno[2]);
console.log("Turma: " + exturma[0]);
console.log("Ano letivo: " + exturma[1]);
//  Exemplo Sem Propriedades usa colchete
let students = [
    ["Marcos", "marcos@gmail.com", 25],
    ["Andre", "andre@gmail.com", 38],
    ["Bruna", "bruna@gmail.com", 43]
];
let classes = [
    ["210A", 2020],
    ["220C", 2022]
]

console.log("\nNome: " + students[0][0]);
console.log("Email: " + students[0][1]);
console.log("Idade: " + students[0][2]);
console.log("Turma: " + classes[0][0]);
console.log("Ano letivo: " + classes[0][1]);
//  Exemplo com Propriedades usa chave
let student = [
    {nome: "Marcos", email: "marcos@gmail.com", idade: 25},
    {nome: "Andre", email:"andre@gmail.com", idade: 38},
    {nome: "Bruna", email: "bruna@gmail.com", idade: 43}
];
let classe = [
    {nome: "215A", ano: 2022},
    {nome: "213B", ano: 2023}

];

console.log("\nNome: " + student[2].nome);
console.log("Email: " + student[2].email);
console.log("Idade: " + student[2].idade);
console.log("Turma: " + classe[1].nome);
console.log("Ano letivo: " + classe[1].ano);
//  Exemplo com Propriedades usa chave
let paluno = {nome: "Andre", email: "carmona@gmail.com", idade: 34};
let pturma = {nome: "2130A", ano: 2023};

console.log(" ");
console.log("Nome: " + paluno.nome);
console.log("Email: " + paluno.email);
console.log("Idade: " + paluno.idade);
console.log("Turma: "+ pturma.nome);
console.log("Ano letivo: " + pturma.ano);
console.log("");
//  Estrutura de repetição for..in - percorre o objeto.
//  Itera cada propriedade de um objeto, seguindo a ordem que elas estao no objeto.
//  dados - representa a propriedade do objeto no loop
let student1 = {nome: "Andre", email: "andre@gmail.com", idade: 34};

for ( let dados in student1 )
{
    console.log(student1[dados]);
} console.log("");
//  Estrutura de repetição for..in - Carro percorre o objeto.
let car = {nome: "Celta", marca: "Chevrolet", preco: 10000, ano:2003};
let percentageDiscount = 5; //  Desconto Percentual

for ( let property in car)
{
    if ( property == "preco") // Condiçao que verifica se a propriedade do carro é igual a "preco"
    {
        let price = property;
        let discount = ( car[price] * percentageDiscount ) / 100;
        let newPrice = car[price] - discount;

        console.log("novo preço: R$" + newPrice.toFixed(2));
    } else
        {
            console.log(property + ": " + car[property]);
        }
    }
console.log("\n");
//  Estrutur de repetição for..in - Pizzaria
let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
]
let desconto = 5;

for ( let cont = 0 ; cont < produtos.length ; cont++)//    Estrutura for
{
    let produto = produtos[cont];

    for ( let prop in produto) //   Estrutura for..in
    {
        if ( prop == "preco")
        {
        let preco = prop;
        let novoPreco = produto[preco] - desconto;
        
        console.log("preço atualizado: R$" + novoPreco.toFixed(2));
        }   else
            {
                console.log(prop + ": " + produto[prop]);
            }
    }
    console.log("\n");
}
//  Estrutura de repetição for..of
//  Não precisa de um contador para iterar os valores de um array.
let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos)
{
    console.log("Email: " + email);
}
//  Estrutura de repetição for..of - Clientes
let clientes_array= [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let client of clientes_array )
{
    let name = client.nome;
    let tel = client.telefone;

    console.log("Nome: " + name + " - Telefone: " + tel);
}
console.log("\n");
//  Estrutura de repetição for..of - Desconto de produtos
let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 }
];
let percentual_desconto = .10;

for ( let prod of produtos_array)
{
    let nom = prod.nome;
    let pre = prod.preco;
    
    let valor_desconto = pre * percentual_desconto;
    let preco_novo = pre - valor_desconto;

    console.log("Produto: " + nom + " - Preço a vista com 10% desconto: R$" + preco_novo.toFixed(2) + " - Preço parcelado: R$" + pre.toFixed(2));
}
console.log("\n")
//  Estrutura de repetição for..of - Soma das notas
let notas_trimestrais = [ 9, 7, 6, 7 ];
let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais)
{
    soma_notas = nota + soma_notas;
}
let media_nota = soma_notas / total_notas;

console.log("Média: " + media_nota);

if ( media_nota >= 7 )
{
    console.log("Aprovado");

} else if ( media_nota < 7 && media_nota >= 5 ) {
    console.log("Recuperação");

} else {
    console.log("Reprovado");
}
console.log("\n");
//  Repetição com while - tabuada do 3
let numero_tab = 3
let contador_tab = 0
console.log("Tabuada do n° " + numero_tab);

while ( contador_tab <= 10 )
{
    let res = numero_tab * contador_tab;
    console.log(numero_tab + " x " + contador_tab + " = " + res);
    contador_tab++
}
console.log("\n");
//  Repetição com for - tabuada do 3
let num_tab = 5
console.log("Tabuada do n° " + num_tab);

for ( let cont_tab = 0 ; cont_tab <= 10 ; cont_tab++)
{
    let res_tab = cont_tab * num_tab;

    console.log(num_tab + " x " + cont_tab + " = " + res_tab);
}
console.log("\n");
//  Repetição com do..while - Meses do Ano
let contador_meses = 0;
let meses_ano = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];

do
{
    console.log(meses_ano[contador_meses]);
    contador_meses++;
} while ( contador_meses < meses_ano.length );
console.log("\n");
//  Repetição com for - Exercicio: Cursos idiomas
let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230}
];

for ( let curso of cursos_idiomas)
{
    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_curso = curso.carga_horaria;
    let valor_aula = preco_curso / carga_curso; 

    console.log ("Curso: " + nome_curso);
    console.log("Valor do curso: R$ " + preco_curso.toFixed(2));
    console.log("Carga horario do curso: " + carga_curso + " horas.");
    //console.log("Valor cobrado por hora curso: R$ " + valor_aula.toFixed(2));

    if ( valor_aula >= 15 )
    {
        console.log("Hora/Aula superior ou igual a R$ 15.00");
    } else {
        console.log("Hora/Aula inferior a R$ 15.00")
    }
    console.log("\n")
}