// contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100

let totalNumeosPares = 0;
let totalNumeosImpares = 0;

// laço de repetição

for(let contador = 0; contador <= 100; contador++) {
    if(contador % 2 == 0) {
        totalNumeosPares++;
    } else {
        totalNumeosImpares++;
    }
}

console.log(`Total de números pares: ${totalNumeosPares}`);
console.log(`Total de números ímpares: ${totalNumeosImpares}`);