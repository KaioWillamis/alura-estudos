// HOF -> Higher Order Function === função que recebe outra função como parâmentro

function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2);
}

function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}   

function divisao(num1, num2){
    return num1 / num2;
}

const resultadoDoSoma = calcular(10, 5, soma);
console.log(`O resultado da soma é: ${resultadoDoSoma}`);

const resultadoDaDivisao = calcular(10, 5, divisao);
console.log(`O resultado da divisão é: ${resultadoDaDivisao}`);

