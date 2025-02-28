// Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

let button = document.getElementById('button');  // Se accede al boton por su id
let comentarios = document.getElementById('comentarios');  // Se accede al div por su id
let name = document.getElementById('name');  //se accede al nombre por su id
let comment = document.getElementById('comment'); //se accede al comentario por su id

button.addEventListener('click', () => {  // Se le agrega un evento al boton
    console.log('Button clicked');
    console.log("el nombre es: " + name.value);
    console.log("el comentario es: " + comment.value);

     // Crear un nuevo div para el comentario
     let nuevoComentario = document.createElement('div');  // Se crea un nuevo div para el comentario 
     nuevoComentario.classList.add('comentario');             // Se le agrega una clase al div
     nuevoComentario.innerHTML = `<strong>${name.value}</strong><p>${comment.value}</p>`; 

      // Crear el botón de eliminar
        let botonEliminar = document.createElement('button');  // Se crea un nuevo elemento, en este caso el boton
        botonEliminar.innerHTML = "Eliminar";           // Se le agrega un texto al boton
        botonEliminar.classList.add('eliminar');        // Se le agrega una clase al boton
        botonEliminar.addEventListener('click', () => {
            nuevoComentario.remove(); //se le agrega el eveto de eliminar al boton con el metodo remove
        });

         // Crear el botón de like
        let botonLike = document.createElement('button');
        botonLike.innerHTML = "Like";
        botonLike.classList.add('like');
        botonLike.addEventListener('click', () => {
            botonLike.innerHTML = "Liked";
        });

        //Agregar fecha y hora
        let fecha = new Date();  // Se crea una variable para la fecha
        let hora = fecha.getHours(); // Se crea una variable para la hora
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let año = fecha.getFullYear();
        let fechaHora = document.createElement('p'); // Se crea un nuevo elemento p para la fecha y hora
        fechaHora.innerHTML = `<strong>Fecha:</strong> ${dia}/${mes}/${año} <p><strong> Hora: </strong> ${hora}:${minutos}:${segundos}</p>`; // Se le agrega la fecha y hora al p
        nuevoComentario.appendChild(fechaHora);  // Se agrega la fecha y hora al nuevo comentario

 
     // Agregar los botones al nuevo comentario
     nuevoComentario.appendChild(botonEliminar);  // Se agrega el boton eliminar al nuevo comentario con el metodo appendChild
     nuevoComentario.appendChild(botonLike); // appendChild se utiliza para agregar un nodo al final de la lista de nodos de un elemento padre especificado
 
     // Agregar el nuevo comentario al contenedor de comentarios
     comentarios.appendChild(nuevoComentario);
 
     // Limpiar los campos del formulario
     name.value = "";
     comment.value = "";

});

// se agrega un evento para que en el comentario se pueda eliminar o dar like a un comentario

