let button = document.getElementById('button');  // Se accede al boton por su id
let result = document.getElementById('result');  // Se accede al div por su id

// ADD EVENT LISTENER

button.addEventListener('click', () => {  // Se le agrega un evento al boton
    console.log('Button clicked');
    console.log("EL NOMBRE ES: " + name.value);
    
    result.innerHTML = "Bienvenido " + name.value
});

//ACCDER A LOS INPUTS POR SU ID

let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let date = document.getElementById('date');
let gender = document.getElementById('gender');
let bio = document.getElementById('bio');
let terms = document.getElementById('terms');
let boton = document.getElementById('button');
