console.log('-----------------Funciones----------------');
function sumTwoNumbers(a, b, c) {
  var result = a + b;
  if (c) {
    result += c;
  }
  return result;
};
console.log(sumTwoNumbers(5, 6, 4));
console.log(sumTwoNumbers(4, 3, 3, 3) + ' ignora el 4to numero');
console.log('-----------Tipos-----------');
typeof undefined
// "undefined"
typeof null
// "object"
typeof true
// "boolean"
typeof false
// "boolean"
typeof "hola"
// "string"
typeof 10
// "number"
typeof 1.6
// "number"
typeof {}
// "object"
console.log('-----------Objetos-----------');
var object = {};
var array = [];
var date = new Date();
var regexp = /(.*)/;

function func() {};

var string = "";
var number = 10;
var bool = true;

object instanceof Object;
// true
array instanceof Array;
// true
date instanceof Date;
// true
regexp instanceof RegExp;
// true
func instanceof Function;
// true

string instanceof String;
// false
number instanceof Number;
// false
bool instanceof Boolean;
// false


/*
Valor primitivo	Constructor
string				String
number				Number
Boolean				Boolean*/

console.log('-----------For-----------');
var counter;

for (counter = 0; counter < 20; counter++) { // inicio del bucle; condición; expresión incremental
  console.log(counter);
}
console.log('-----------Declarando una funcion utilizando los métodos call y apply.-----------');
function buildSiteTitle(part1, part2) {
  return part1 + ' — ' + part2;
};
var nameStore = 'Lookuma';

console.log(buildSiteTitle(nameStore , 'Catalogo'));
/* Investigar porque se pasa el null a los metodos call y apply*/
console.log(buildSiteTitle.call(null, nameStore , 'Las Tiendas'));

console.log(buildSiteTitle.apply(null, [nameStore , 'La Historia']));



