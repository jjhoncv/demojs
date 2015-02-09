console.log('----------------------------------------------');
console.log('Creando un objeto de forma literal');
console.log('1.- Los Objetos literales son colecciones de pares (NOMBRE : VALOR)');
console.log('	A.- Primera parte NOMBRE: Es unico dentro el objeto y en general es una cadena.');
console.log('	B.- Segunda parte VALOR: Puede ser de cualquier tipo hasta objetos.');
console.log('2.- Un objeto puede contener otros objetos');
console.log('var myFirstObject = {};');
var myFirstObject = {};
console.log(myFirstObject);
console.log('resultado es '+ myFirstObject);
console.log('----------------------------------------------');
console.log('Creando una instancia en el Object');
console.log('var mySecondObject = new Object({nombre : "valor",}); mySecondObject;');
var mySecondObject = new Object({nombre : "valor",}); 
console.log('el resultado te debe de mostrar asi: ');
console.log(mySecondObject);
console.log('----------------------------------------------');
console.log('Creando un objeto del mismo constructor del parametro que se le pase');
console.log(new Object({}));
console.log(new Object(true));
console.log(new Object(1));
console.log(new Object(""));
console.log(new Object([]));
console.log('----------------------------------------------');
console.log('Existen dos formas para asignar y acceder al valor de una propiedad en un objeto: Entonces creamos el objeto');
var usersList = {
  ListName: 'Lista de Usuarios',
  usersFirstName: [
    'Ronny',
    'Erick',
    'Guillermo',
    'Hector',
    'Jimmy'
  ],
  usersLastName: [
    'Cabrera Sinarahua',
    'Cardenas Nimas',
    'Mispierta Venegas',
    'Cabrera Vilchez',
    'Cabrera Chavez'
  ],
  usersTotal: 5
};
console.log(usersList);
console.log('Accedemos al valor de una propiedad del objeto usando el punto(usersList.ListName =>) ' + usersList.ListName );
console.log('(usersList.usersFirstName =>) ' + usersList.usersFirstName);
console.log('(usersList.usersTotal =>) ' + usersList.usersTotal);
console.log('Accedemos al valor de una propiedad del objeto usando corchetes(usersList["ListName"] =>) ' + usersList["ListName"]);
console.log('(usersList["usersLastName"] =>) ' + usersList["usersLastName"]);
console.log('(usersList["usersTotal"] =>) ' + usersList["usersTotal"]);
console.log('----------------------------------------------');
console.log('Prototype: Un prototipo es un objeto del cual otros objetos heredan propiedades, osea cualquier objeto puede ser un prototype');





//console.log(new Object(false));




















