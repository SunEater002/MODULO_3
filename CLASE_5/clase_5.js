/* SINTAXIS DE OBEJTO GENERAL */

console.log("----------SINTAXIS DE OBEJTO GENERAL----------");

let persona = {
    nombre : "Omar",
    edad : 23,
    ocupacion : "Desarrollador",
};

console.log(persona);

// Usando un constructor object
console.log("----------Usando un constructor object----------");

const persona2 = new Object();
persona2.nombre = "Omar";
persona2.edad = 23;
persona2.ocupacion = "Estudiante";

console.log(persona2);

// Usando clases (ES6)

console.log("----------Usando clases (ES6)----------");

class Persoona {                                                // Clase, se declara la clase 
    constructor(nombre, edad, ocupacion, email) {             // Constructor, se declara el constructor             
        this.nombre = nombre;                              // Propiedades, se declaran las propiedades                      
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.email = email;
    }

    hacerAlgo() {                                        // Métodos, se declaran los métodos    
        console.log(this.nombre + " está haciendo algo");         // Código del método
    }
}

nombre = "Omar";                         // Declaración de variables
edad = 25;
ocupacion = "Estudiante";
email = "omar@ejemplo";

const persona3 = new Persoona(nombre, edad, ocupacion, email); // Instanciación de la clase
console.log(persona3);                                      // Impresión del objeto
persona3.hacerAlgo();                                   // Llamada al método

// Metodos de objetos

console.log("----------Metodos de objetos----------");

const calculadora = {                                      // Objeto, se declaran las propiedades
    sumar: function(a, b) {                              // Método, se declara el método
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};
console.log(calculadora.sumar(2, 3));                  // Llamada al método
console.log(calculadora.restar(2, 3));
console.log(calculadora.multiplicar(2, 3)); 
console.log(calculadora.dividir(2, 3));

// Ejercicio practico
//Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.

console.log("----------Ejercicio practico----------");

class auto{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarInfo(){
        console.log("marca: " + this.marca);
        console.log("modelo: " + this.modelo);
        console.log("año: " + this.año);
    }
}

const auto1 = new auto("Chevrolet", "Camaro", 2021);
auto1.mostrarInfo();
