'use strict';

// Closurescd

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

function counter() {
  var contador = 1; //creamos la variable que va a contener los numeros que se iran incrementando al ejecutarse con el ++
  return function() { //la funcion counter retorna otra funcion, por ende es un clouser
    return contador++;

  }

}
const contenedor = counter() //*instancia de counter ejecutar
console.log(contenedor())
console.log(contenedor())
console.log(contenedor())

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso,
 debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, 
  y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, 
  no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

  function Ejercicio(value){ // se crea la operacion que se va a guardar en la memoria, se pone un argumento (value) que guarda un valor ya otorgado por cb
    return 6 * value
  }


function cacheFunction(cb) { //a cacheFunction se le crea una funcion que invoque a cs con el argumento, es decir cb(value)
  var cache = {}
  return function (value) { //recibe el valor con el cual se va a ejecutar la funcion de callback
    if(cache.hasOwnProperty(value)){ //le pregunto a cache si tiene la propiedad del valor que me lleva, guardado en la memoria
     return cache[value]; //si lo tiene que retorne ese valor
  }else{
    cache[value] = cb(value) // al objeto le asigna una propiedad, y le dice que su valor es lo que me devuelva cb {ej: 4 : 24}
    return cache[value] //aqui invoca a cb ya dentro de cache, para asi no llamar dos veces al cb. 
     }
  }

}

const cache1 = cacheFunction(Ejercicio)//creamos la variable instancia de cacheFunction(Ejercicio) << pasamos por argumento la funcion de callback function(value) se vuelve dicha funcion
console.log(cache1(4))
console.log(cache1(4))
console.log(cache1(5));

//el ultimo console.log, espera recibir un valor, entonces se lo otorgo, en este ej 4, 4, 5

 
//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor); //dentro del parentesis va a donde quiero que apunte, es decir a la variable instructor que contiene los objetos, {nombre, edad}
let getNombreAlumno = getNombre.bind(alumno);

 

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*"); //los detalles nos lo pasa la funcion crearCadena, nosotros agregamos los delimitadores, el null va porque no es necesario pasar el this, debido a que ya esta arriba en la funcion. 
let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
