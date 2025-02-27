// TAREA 
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el     autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser           'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

// 1 Creamos el objeto libro con las propiedades titulo, autor, anio y estado y el método para imprimir la información básica del libro.

class libro {
    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }
    describirLibro(){
        console.log("Libro titulado " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ", el estado es: " + this.estado);
    }
}

const libros = [
    new libro("El principito", "Antoine de Saint-Exupéry", 1943, "disponible"),
    new libro("El señor de los anillos", "J.R.R. Tolkien", 1954, "prestado"),
    new libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible"),
    new libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "prestado")
];

libros.forEach(libro => libro.describirLibro());  
// Llamamos al método describirLibro de cada libro en el array libros,
//  usando el método forEach.
// forEach es un método que recorre cada elemento de un array y ejecuta una función para cada uno de ellos.
// En este caso, recorre cada libro y llama al método describirLibro de cada uno de ellos.