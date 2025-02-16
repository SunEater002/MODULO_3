//PROBLEMA : CREAR UN SISTEMA SENCILLO QUE NOS DIGA LOS LIBROS QUE HEMOS LEIDO

console.log("PROBLEMA DE LIBROS LEIDOS")

let librosleidos = []

function agregarlibro(libro){
    librosleidos.push(libro); //funcion que agrega un libro 
}

function mostrarLibros(){
    console.log("Libros leidos: ")
    for (let i=0; i<librosleidos.length; i++){  // recorre el arreglo y se ejecuta mientras 
                                                // i sea menos a la longitud del arreglo
        console.log((i + 1) + ". " + librosleidos[i]);  // imprime cada elemento del arreglo de la poscision i 
    }
}

//AGREGA UN LIBRO 
agregarlibro("ANODER");
agregarlibro("NARNIA")
agregarlibro("GOT");
agregarlibro("ANTES DE TI");
agregarlibro("PERFUME")

//MUESTRA LOS LIBROS 
mostrarLibros();