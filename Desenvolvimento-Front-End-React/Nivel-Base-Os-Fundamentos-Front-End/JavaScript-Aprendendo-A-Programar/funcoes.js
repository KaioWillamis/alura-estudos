//function saudacao(nome) { // nome é um paramentro da função saudacao
//    console.log(`Olá, `, nome);
//}

const saudacao = (nome) => {
    console.log(`Vida longa e próspera, ${nome}`);
};

saudacao("Kaio"); // Kaio é o "argumento"

//function calcularDobroDeUm(numero) {
//    return numero * 2;
//}

const calcularDobroDeUm = (numero) => {
    return numero * 2;
}

console.log('O dobro de 5 é: ', calcularDobroDeUm(5));

console.log('oi,', 'tudo', 'bem', '?');