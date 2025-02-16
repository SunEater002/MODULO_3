console.log("FUNCIONES");

// Funciones
// Las funciones son bloques de código que se pueden reutilizar en distintas partes de nuestro programa.
// Las funciones pueden recibir parámetros y devolver un valor.

// Declaración de una función

let nombre = "Juan";

function saludar(nombre){
    return("Hola" + nombre);
}

console.log(saludar(nombre));


console.log("FUNCION SUMAR, MULTIPLICAR Y DIVIDIR");

// Función sumar
// Crear una función que reciba dos números y devuelva la suma de ambos.
function sumar(a, b){
    return a + b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){  
    return a / b;
}

console.log("Resultado suma: " + sumar(2, 3));
console.log("Resultado multiplicacion: " + multiplicar(5, 3)); 
console.log("Resultado division: " + dividir(50, 2));


console.log("VARIABLES GLOBALES Y LOCALES");

// Variables globales y locales

// Variable global
let mensajeglob = "Hola global";

function saludar(){
    // Variable local
    let mensajeloc = "Chau local";
    return mensajeloc;
}

console.log(mensajeglob);
console.log(saludar());


console.log("FUNCIONES ANONIMAS");

// Funciones anónimas
// Las funciones anónimas son funciones que no tienen nombre y se asignan a una variable.

let saludarAnonimo = function(nombre){ 
    console.log("Hola " + nombre) 
}
saludarAnonimo("Omar")

console.log("FUNCIONES FLECHA")

//Forma mas concisa de escribir una funcion 

const multiplicar2 = (a,b) => a * b; 
console.log("Resultado: " + multiplicar2(10,5));