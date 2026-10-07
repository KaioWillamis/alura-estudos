// estrutura de laço de repetição FOR
for(let contador = 1; contador <= 10; contador++){
    console.log("Número atual:", contador);
}

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 == 0){
        console.log("Número par encontrado:", numero);
    }
}

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 > 0){
        console.log("Número ímpar encontrado: ", numero);
    }
}

const palavra = 'calopsita';

// palavra.lenght indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada

for(let cont = 0; cont <= palavra.length; cont++){
    console.log(palavra[cont]);
}