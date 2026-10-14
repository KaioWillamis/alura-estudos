function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}

//setTimeout(saudacao, 2000); //ms

let contador = 0;
const id = setInterval(() => {
    contador++;
    console.log('Tempo decorrido: ' + contador + ' segundos');
    if(contador == 10){
        clearInterval(id);
    } 
}, 1000); //ms