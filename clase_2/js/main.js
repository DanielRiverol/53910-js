//Variables
let nombre; //declaración => no números ni caracteres especiales salvo _ o $
nombre = "Pablo"; //asignación
let apellido = "López"; //inicialización

const CLAVE = "oruga"; //las constantes siempre se inicializan
/* console.log(apellido);
console.log(nombre); */

/* let num1=prompt('Ingresa un número')
num1= parseFloat(num1)
let num2=parseFloat(prompt('Ingresa un número'))
console.log(num1);
console.log(num2); */
//si condicion entonces algo
if (true) {
  //bloque de ejecucion
  // console.log('Vas a ver este codigo');
}
if (false) {
  //bloque de ejecucion
  console.log("Vas a ver este codigo");
}

/* let temp = 30;
// = es asignacion == comparacion
if(temp == 30){
    console.log("Hace calor");
}
if(temp < 40){
    console.log("Temp menor a 40");
}
 */
/* let decision = prompt("Para donde vamos? arcoriris o cascada");

if (decision == "arcoiris") {
  alert("Bien nos salvamos");
} else {
  alert("Nos caimos a la cascada");
}
 */

/* let ingreso = prompt("Ingresa tu talle de remera");

/* if (ingreso == "") {
  alert("Campo vacio");
} else {
  alert("Bienvenido/a " + ingreso);
} */
let usuario = "Dani";
let pass = "12345";
//if anidado
/* if (ingreso == usuario) {
  ingreso = prompt("Ingresa tu password");
  if (ingreso == pass) {
    alert("Bienvenido/a " + usuario);
  } else {
    alert("Credenciales incorrectas");
  }
} else {
  alert("Usuario no encontrado");
} */
/*
if (ingreso >= 100) {
  alert("XL");
} else if (ingreso >= 70) {
  alert("MD");
} else if (ingreso >= 50) {
  alert("SM");
} else {
  alert("XS");
}
 */
//variable booleana
/* let esValido = 5 == 5;
console.log(esValido);
if (esValido) {
  alert("Son iguales");
} else {
  alert("No son iguales");
}
 */

//AND && devueldeve true cuando las dos condiciones sean verdadesras (true)&&(true)=true
/* let ingresoUser = prompt("Ingresa tu usuario");
let ingresoPass = prompt("Ingresa tu Password");
let check = "4";
let checkIngreso = prompt("Cuanto es 2 + 2");
let credenciales = ingresoUser == usuario && ingresoPass == pass; //variable booleana

if (credenciales && checkIngreso == check) {
  alert("Bienvenido " + usuario);
} else {
  alert("Credenciales incorrectas");
} */

//OR || cualquier condicion que sea true todo va a ser true
let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
/* let edadUsuario = parseInt(prompt("Ingresá tu edad"));
if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
  alert("Estas obligado a votar");
} else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
  alert("Podes votar si queres");
} else {
  alert("No podes votar todavia");
}
 */

let ingreso = prompt("ingresa tu nombre");

if (ingreso != "") {
  alert("Bienvenido");
} else {
  alert("Campo vacio");
}
