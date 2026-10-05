const nome = '';

if(nome) {
    console.log('Olá, ', nome);
}
else{
    console.log('Ainda não sei o seu nome');
}

const idade = null;

if(idade != null) {
    if(idade >= 18) {
        console.log('Você é maior de idade');
    }
    else if(idade < 18) {
        console.log('Você é menor de idade');
    }
}
