//Antes de comenzar quitar el auto save de VSCode
//for desde, hasta , actualizacion
/* for (let i = 0; i <= 10; i++) {
  //bloque de ejecucion
  console.log("La variable i vale: " + i);
} */

/* for (let i = 10; i >= 0; i = i - 1) {
  console.log("Cuenta regresiva: " + i);
}
console.log("Despegue");
 */
/* let ingreso = parseInt(prompt("Ingresa un numero"));
let limite = parseInt(prompt("Ingresa hasta donde quieres multiplicar"));

for (let i = 0; i <= limite; i++) {
  let resultado = ingreso * i;

  console.log(
    "El producto de " + ingreso + " x " + i + " es igual a " + resultado
  );
} */

/* let ingreso = parseInt(prompt("Ingresa un numero para saber si es primo"));
let esPrimo = true;
for (let i =2;  i < ingreso; i++) {
  if (ingreso % i == 0) {// % devuelve el resto de un dividsion
    console.log("Ademas de dividor por 1 y por si mismo divide por: " + i);
    esPrimo = false;
  }
}

if (esPrimo) {
  console.log("El numero es primo");
} else {
  console.log("El numero es NO primo");
}
 */
//break

/* let palabraClave = "hola";

for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Adivina la palbara clave, teienes 3 intentos");
  if (ingreso == palabraClave) {
    alert("Adivinaste");
    break;
  } else {
    alert("Uhhh");
  }
}
console.log("Termina el bucle"); */
//continue
/* for (let i = 1; i <= 30; i++) {
  if (i % 2 == 0) {
    //console.log("impar");
    continue;
  }
  console.log(i);
} */

//While

/* let ingreso = prompt("Ingresa un producto, para salir escribe ESC");
while (ingreso != "ESC") {
  //bloque de ejecucion
  console.log("Producto ingresado: " + ingreso);

  //condicion de salida
  ingreso = prompt("Ingresa otro producto,para salir escribe ESC");
} */

/* for (let i = 0; i <= 3; i++) {
  alert("Ya llegamos a la India?");
  alert("no");
}
alert("A ver...? mmm Ahora si....");
 */
// let ingreso = prompt("Ya llegamos a la India?");

// while (ingreso != "si") {

//   //condicion
//     ingreso = prompt("Ya llegamos a la India?");
// }
// alert("A ver...? mmm Ahora si....");

//do while

let ingreso;
do {
  ingreso = prompt("Ingresa un produpapacto para salir presion x");
  if (ingreso != "x") {
    console.log("Producto ingresado " + ingreso);
  }

  //hacer que la ingresar x no se muestre la x
} while (ingreso != "x");
