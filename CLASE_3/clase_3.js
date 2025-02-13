/*paractica de while */

/*contador del 20 al 1 imprimiendo solo los numeros pares */
console.log('numeros pares del 20 al 1');
let contador = 20;

while (contador >=1) {
    if (contador % 2 == 0) {  /*si el residuo de la division es 0 es par */
        console.log(contador);
    }
    contador--;
}

console.log('-----------------------------------');

/*contador del 20 al 1 imprimiendo solo los numeros impares */
console.log('numeros impares del 20 al 1');
let contadors = 20;

while (contadors >=1) {
    if (contadors % 2 == 0) {  /*si el residuo de la division es 0 es par */
        console.log(contadors + 1); /*si es par le sumo 1 para que sea impar */
    }
    contadors--;
}


console.log('-----------------------------------');
console.log('contador del 0 al 10');

/* cicclos for */
/* contador del 0 al 10 */

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('-----------------------------------');
console.log('suma de los numeros del 1 al 10');

let suma = 0;
for ( let i=0; i<=10; i++) { /* ontador del 0 al 10 */
    suma = suma + i; /* suma los numeros del 0 al 10 */
}
console.log(suma);

console.log('-----------------------------------');
console.log('contador del 10 al 0');

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log('-----------------------------------');
console.log('contador del 0 al 20 de 2 en 2');


for (let i = 2; i <= 20; i = i + 2) { /* contador del 2 al 20 de 2 en 2 */
    console.log(i); /* suma los numeros pares del 2 al 20 */
}

console.log('-----------------------------------');
console.log('suma de los numeros pares del 0 al 20');

let sumap = 0;
for ( let i=0; i<=20; i = i + 2) { /* contador del 0 al 20 de 2 en 2 */
    sumap = sumap + i; /* suma los numeros pares del 0 al 20 */
}
console.log(sumap);

console.log('-----------------------------------');
console.log('Arreglo de numeros');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /* arreglo de numeros */

console.log('-----------------------------------');
console.log('arreglo de frutas con salida mediante su indice');

let frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon']; /* arreglo de frutas */
console.log(frutas[0]); /* imprime la fruta en la posicion 0 */

frutas [2] = 'platano'; /* cambia la fruta en la posicion 2 */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('añadir un elemento al final del array con PUSH()');

frutas.push('kiwi'); /* añade un elemento al final del array */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('añadir un elemento al inicio del array con UNSHIFT()');
frutas.unshift('fresa'); /* añade un elemento al inicio del array */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('eliminar un elemento al final del array con POP()');
frutas.pop(); /* elimina un elemento al final del array */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('eliminar un elemento al inicio del array con SHIFT()');
frutas.shift(); /* elimina un elemento al inicio del array */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('eliminar un elemento en una posicion especifica con SPLICE()');
frutas.splice(2, 1); /* elimina un elemento en la posicion 2 */ /* 2 es la posicion y 1 es la cantidad */
console.log(frutas); /* imprime el arreglo de frutas con la modificacion*/

console.log('lonfitud de un array con LENGTH');
console.log(frutas.length); /* imprime la longitud del array */
console.log(frutas[frutas.length - 1]); /* imprime el ultimo elemento del array */ /* frutas.length - 1 es la ultima posicion del array */

console.log('Iterar un array con FOR');
for (let i = 0; i < frutas.length; i++) { /* itera el array de frutas */ /* frutas.length es la longitud del array */ /* i es el contador */ /* i < frutas.length es la condicion de parada */
    console.log(frutas[i]); /* imprime cada elemento del array */
}

console.log('-------------------------------------')
console.log('Arreglo de colores');

let colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja']; /* arreglo de colores */
console.log('Primer arreglo de colores');
console.log(colores); /* imprime el arreglo de colores */

console.log('Segundo color del arreglo');
console.log(colores[1]); /* imprime el segundo color del arreglo */

console.log('Modificar el tercer color del arreglo');
colores[2] = 'cafe'; /* modifica el tercer color del arreglo */

console.log('Añadir un color');
colores.push('rosa'); /* añade un color al final del arreglo */

console.log('Eliminar el primer color');
colores.shift(); /* elimina el primer color del arreglo */

console.log('Arreglo final de colores');
console.log(colores); /* imprime el arreglo final de colores */