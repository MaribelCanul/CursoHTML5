//eje06_js.js
var ingredientes = new Array();
ingredientes[0] = 'Azúcar';
ingredientes[1] = 'Leche';
ingredientes[2] = 'Café';
ingredientes[3] = 'true';
ingredientes[8] = 'Pan';
console.log(ingredientes[2]);
console.log(ingredientes);
console.log('Longitud del arreglo: ', ingredientes.length);

var score = new Array();
console.log(score);

var score2 = Array(20);

var ingredientes2 = new Array('Elemento1', 'Elemento2', true, false, 89.5);
var ingredientes3 = ('Elemento3', 'Elemento3', true, false, 89.5);
console.log(ingredientes2[4]);
console.log(ingredientes2[5]);

/*for(let i=0; i < ingredientes2.length; i++)
console.log(ingredientes2[i]);*/

for(let i of ingredientes2){
    console.log[i];
}
// Concatena uno o mas arreglos
var todos = ingredientes2.concat(ingredientes3);
console.log(todos);
console.log(typeof todos);

//  localiza el elemento en el arreglo y regresa su índice
var index = ingredientes2.indexOf('Elemento1');
console.log(index);

//localiza el elemento desde el final del arreglo y regresa su índice
var index2 = ingredientes2.lastIndexOf(true);
console.log(index2);

//crea una cadena de los elementos del arreglo delimitados por coma (se puede cambiar el separador)
var str = ingredientes2.join();
console.log(str);
console.log(typeof str);

//Elimina y regresa el último elemento del arreglo
var lastelement = ingredientes2.pop();
console.log(lastelement);

//adiciona un nuevo elemento al final del arreglo y regresa la nueva longitud
var newsize = ingredientes2.push('New element');
console.log(ingredientes2);
console.log(newsize);
console.log(ingredientes2.length);

//invierte el orden de los elementos del arreglo y regresa una referencia al arreglo invertido
console.log(ingredientes2.reverse());

//elimina y regresa el primer elemento del arreglo
var firstElement = ingredientes2.shift();
console.log(ingredientes2);
console.log(firstElement);
console.log(ingredientes2.length);

// slice(1,3), (posición, no. de elementos)
// regresa un nuevo arreglo que representa una parte del arreglo existente
var pedazos = ingredientes2.slice(1,3);
console.log(pedazos);

// ordena los elementos y regresa la referencia al arreglo
var numeros = [8, 9, 2, 5, 1, 3, 4];
console.log(numeros.sort());

// Crea una cadena con los elementos del arreglo
var cadena = numeros.toString();
console.log(cadena);

//adiciona un nuevo elemento al principio del arreglo y devuelve la longitud
let elemento = numeros.unshift(20);
console.log(numeros);
console.log(elemento);





