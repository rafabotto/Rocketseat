"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1
// const idadeArr = usuarios.map(function(item){
//     return item.idade;
// });

var idadeArr = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idadeArr); // //2.2
// const filter = usuarios.filter(function(item){
//     if(item.idade > 18 && item.empresa === 'Rocketseat'){
//         return item;
//     }
// });

var filter = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade >= 18;
});
console.log(filter); //2.3
// const find = usuarios.find(function(item){
//     if(item.empresa === 'Google'){
//         return item;
//     }
// });

var find = usuarios.find(function (usuario) {
  return usuario.empres === "Google";
});
console.log(find); //2.4

var filter1 = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(filter1);
