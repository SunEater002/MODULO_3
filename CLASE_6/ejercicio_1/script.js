// Crear una página donde el contenido de un título y un párrafo cambie cuando el usuario haga clic en un botón.

//1. Seleccionar los elementos del DOM que vamos a necesitar

let titulo = document.getElementById("titulo");  //seleccionamos el elemento con id "titulo"
let parrafo = document.getElementById("parrafo");  //seleccionamos el elemento con id "parrafo"

//2. Seleccionar el botón y agregarle un evento

let boton = document.getElementById("boton");  //seleccionamos el elemento con id "boton"

//3. Agregar el evento

boton.addEventListener("click", () => {
    console.log("Botón clickeado");

    //4. Cambiar el contenido del título y del párrafo
    titulo.innerHTML = "Contenido Actualizado";
    parrafo.innerHTML = "El contenido del párrafo ha sido actualizado";
});

