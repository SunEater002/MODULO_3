/*PROGRAMA QUE CLASIFICA LAS FRUTAS SEGUN SU TIPO Y CUENTA CUANTAS HAY DE CADA TIPO*/

// Se crea un arreglo con las frutas
let frutas = ["Manzana","Manzana","Manzana","Manzana","platano","platano","fresa","fresa","fresa","fresa","fresa","naranja","naranja","naranja","uva","uva","uva","sandia"];

// Se crean los arreglos vacíos para clasificar las frutas
let frutas_manzana = [];
let frutas_platano = [];
let frutas_fresa = [];
let frutas_naranja = [];
let frutas_uva = [];
let frutas_sandia = [];

// Se recorre el arreglo de frutas

for (let i = 0; i < frutas.length; i++) {
    // Se obtiene el numero de frutas
    let numero = frutas[i].toLowerCase(); // Se convierte a minúsculas para evitar errores de clasificación
    // Se clasifica la fruta en su arreglo correspondiente
    if (numero == "manzana") {
        frutas_manzana.push(frutas[i]);
    } else if (numero == "platano") {
        frutas_platano.push(frutas[i]);
    } else if (numero == "fresa") {
        frutas_fresa.push(frutas[i]);
    } else if (numero == "naranja") {
        frutas_naranja.push(frutas[i]);
    } else if (numero == "uva") {
        frutas_uva.push(frutas[i]);
    } else if (numero == "sandia") {
        frutas_sandia.push(frutas[i]);
    }
 }
 // Se muestra el conteo de cada tipo de fruta
    console.log("Manzanas: ", frutas_manzana.length);
    console.log("Platanos: ", frutas_platano.length);
    console.log("Fresas: ", frutas_fresa.length);
    console.log("Naranjas: ", frutas_naranja.length);
    console.log("Uvas: ", frutas_uva.length);
    console.log("Sandias: ", frutas_sandia.length);


