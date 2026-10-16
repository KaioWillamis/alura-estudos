const pessoa = {
    nome: 'Nathalia',
    idade: 17,
    profissao: 'Estudante'
}


const {nome, idade} = pessoa;

console.log(nome);
console.log(idade);

function saudacao({nome}){
    console.log('Olá ', nome);
}

saudacao(pessoa);

const frutas = ['uva', 'banana'];

const [primeira, segunda] = frutas;

