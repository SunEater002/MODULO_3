//SELECION DE ELEMENTOS

//SINTAXIS
//document.getElementById("id")

//EJEMPLOS

let titulo_publicaciones = document.getElementById("titulo_publicaciones");   //seleccionamos el elemento con id "titulo_publicaciones"
console.log(titulo_publicaciones);

titulo_publicaciones.style.color = "red";   //style es una propiedad que permite modificar el estilo de un elemento HTML
titulo_publicaciones.innerHTML = "Nuevas publicaciones";  //innerHTML es una propiedad que permite modificar el contenido de un elemento HTML

//document.getElementsByClassName("class")

let publicaciones = document.getElementsByClassName("publicacion");  //seleccionamos los elementos con la clase "publicacion"
console.log(publicaciones);

for(let i = 0; i < publicaciones.length; i++){  //recorremos el arreglo de elementos
    publicaciones[i].style.backgroundColor = "lightgray";  //modificamos el color de fondo de cada elemento
    publicaciones[i].innerHTML = "Publicación numero: " + (i+1);  //modificamos el contenido de cada elemento
    publicaciones[i].style.padding = "10px";  //modificamos el padding de cada elemento
    publicaciones[i].style.margin = "10px";  //modificamos el margin de cada elemento

}

//document.getElementsByTagName("tag")

let article = document.getElementsByTagName("article");  //seleccionamos los elementos con la etiqueta "article"
console.log(article);

for(let i = 0; i < article.length; i++){  //recorremos el arreglo de elementos
    article[i].style.color = "black";  //modificamos el color de texto de cada elemento
    article[i].style.fontSize = "20px";  //modificamos el tamaño de texto de cada elemento
    
}


//document.querySelector("selector")

let h1 = document.querySelector("h1");  //seleccionamos el primer elemento h1
console.log(h1);
h1.innerHTML = "Nuevo titulo";  //modificamos el contenido del elemento
h1.style.color = "blue";  //modificamos el color de texto del elemento

//document.querySelectorAll("selector")

let a = document.querySelectorAll("a");  //seleccionamos todos los elementos a
let li = document.querySelectorAll("li");  //seleccionamos todos los elementos li
console.log(a);
console.log(li);

for(let i = 0; i < a.length; i++){//recorremos el arreglo de elementos
    a[i].style.color = "aqua";  //modificamos el color de texto de cada elemento
    a[i].style.textDecoration = "none";  //modificamos la decoración de texto de cada elemento
    a[i].style.fontSize = "20px";  //modificamos el tamaño de texto de cada elemento
}


//MANIPULACION DE CONTENIDO DEL DOM

//SINTAXIS
//elemento.innerHTML = "contenido"
//elemento.innerText = "contenido"

//EJEMPLOS

let casa = document.getElementById("casa");  //seleccionamos el elemento con id "titulo1"
console.log(casa);

casa.innerHTML = "CASA";  //modificamos el contenido del elemento


//CREAR NUEVOS ELEMENTOS

//SINTAXIS
//document.createElement("elemento")

//EJEMPLOS crear un nuevo articulo

let nuevo_articulo = document.createElement("article");  //creamos un nuevo elemento article

nuevo_articulo.className = "Publicacion";  //modificamos el contenido del nuevo elemento  className es una propiedad que permite modificar la clase de un elemento HTML
nuevo_articulo.innerHTML = `
    <h3>Nuevo Título del Artículo</h3>
    <p>Este es el contenido del nuevo artículo. Aquí puedes agregar más detalles sobre el tema.</p>
    <a href="#">Leer más</a>
`;  //modificamos el contenido del nuevo elemento

let seccionHome = document.getElementById("home");  //seleccionamos el elemento con id "seccionHome"
seccionHome.appendChild(nuevo_articulo);  //agregamos el nuevo elemento al final del elemento seleccionado


//ELIMINAR ELEMENTOS

//SINTAXIS
//elemento.remove()

//EJEMPLOS

let publicacion1 = document.getElementById("about");  //seleccionamos el elemento con id "publicacion1"
console.log(publicacion1);

publicacion1.remove();  //eliminamos el elemento seleccionado



