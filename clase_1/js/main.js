// Declarar Variables
let nombre;
let apellido;
let edad;
let temp;
let temp2;

//Asignar un valor
nombre = "Juan"; //String
console.log(nombre);
apellido = "Riv";

edad = 41;
console.log(edad);
temp = 32.5;
temp2 = 40;

//reasigancion
edad = "Treinta";
console.log(edad);
edad=30;
console.log(edad);
let nombreCompleto = "Juan Perez";
//constante
const IVA = 21; //Inicializacion
const PI = 3.14;
const GRAVEDAD = 9.8;
// No se permite PI= 4;
let radio = 12;
let superficieCirculo = PI * (radio * radio);

//CONCATENACION
let nombre2 = "Rodrigo";
let apellido2 = "Perez";

let nombreCompleto2= nombre2 + " " + apellido2;//concatenacion

let suma = edad + PI; //operacion aritmetica
//metodo de salida
/* console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log("La superficie del circulo es: "  + superficieCirculo + " cm cuadrados"); */

//alert("La superficie del circulo es: "  + superficieCirculo + " cm cuadrados")

//let nombre3= prompt("Escribe tu nombre")

//console.log(nombre3);


//calculadora
let usuario= prompt("Ingresa tu nombre")
alert("bienvenido/a " + usuario )
let num1= prompt("Escribe un numero para sumar")
let num2= prompt("Escribe un numero para sumar")
//parseo
num1= parseInt(num1)
num2= parseFloat(num2)

let result= num1 + num2;
alert("El resultado de la suma entre " + num1 + " + " + num2 + " es: " + result);
