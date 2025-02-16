// Arreglos

let a = [1, 2, 3, 4, 5]

// push -> Agregar al final
console.log('AGREGAR AL FINAL');
a.push(6)
console.log(a)

// pop -> Eliminar al final
console.log('ELIMINAR AL FINAL');
a.pop()
console.log(a)

// unshift -> Agregar al inicio
console.log('AGREGAR AL INICIO');
a.unshift(0)
console.log(a)

// shift -> Eliminar al inicio
console.log('ELIMINAR AL INICIO');
a.shift()
console.log(a)

// sort -> Ordenar
console.log('ORDENAR');
let b = [4,1,6,8,2,5,3,7]
b.sort()
console.log(b)

// map -> Modificar todos los elementos
console.log('MAPEAR_modificar todos los elementos');
let c = [1,2,3,4,5]

funcion_de_mapear = function(elemento) {
    return elemento * 3
}

let d = c.map(funcion_de_mapear)

c.map(function(elemento) {  // Lineas de codigo no necerias para el funcionamineto
    return elemento * 2     // de la funcion de mapear
})

console.log(d)

// map -> Modificar todos los elementos (otra forma)

console.log('MAPEAR_modificar todos los elementos (otra forma)');
let e = [5,20,40,60,80],

funcion_mapear_2 = function(elemento) {
    return elemento / 5
}

let f = e.map(funcion_mapear_2)

console.log(f)