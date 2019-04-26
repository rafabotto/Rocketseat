const usuario = {
    nome: 'Rafael',
    idade: 27,
    endereco: {
        cidade: 'Campinas',
        estado: 'SP',
    },
};

console.log(usuario);

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome}){
    console.log(nome, idade);
}

mostraNome(usuario);