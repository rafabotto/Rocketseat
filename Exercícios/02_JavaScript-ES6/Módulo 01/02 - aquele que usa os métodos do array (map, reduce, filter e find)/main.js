const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
// const idadeArr = usuarios.map(function(item){
//     return item.idade;
// });
const idadeArr = usuarios.map(usuario => usuario.idade);
console.log(idadeArr);

// //2.2
// const filter = usuarios.filter(function(item){
//     if(item.idade > 18 && item.empresa === 'Rocketseat'){
//         return item;
//     }
// });
const filter = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(filter);

//2.3
// const find = usuarios.find(function(item){
//     if(item.empresa === 'Google'){
//         return item;
//     }
// });
const find = usuarios.find(usuario => usuario.empres === "Google");
console.log(find);

//2.4
const filter1 = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);
console.log(filter1);
