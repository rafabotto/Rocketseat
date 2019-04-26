"use strict";

var usuario = {
  nome: 'Rafael',
  idade: 27,
  endereco: {
    cidade: 'Campinas',
    estado: 'SP'
  }
};
console.log(usuario); // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome, idade);
}

mostraNome(usuario);
