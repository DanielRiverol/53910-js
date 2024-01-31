/* let ingreso = prompt(
  "Selecciona una bebida \n 1-Café \n 2- Té \n 3- Agua caliente"
);
 */
/* if (ingreso === "1") {
  alert("Seleccionaste Café");
} else if (ingreso === "2") {
  alert("Seleccionaste Té");
} else if (ingreso === "3") {
  alert("Seleccionaste Agua caliente");
} else {
  alert("Opción no válida");
}
 */
/* 
switch (ingreso) {
  case "1":
    alert("Seleccionaste Café");
    break;
  case "2":
    alert("Seleccionaste Té");
    break;
  case "3":
    alert("Seleccionaste Agua caliente");
    break;

  default:
    alert("Opción no válida");
    break;
} */
//declaracion
function saludar() {
  console.log("Hola tarola");
}

//llamado
/* for (let i = 0; i < 3; i++) {
  saludar();
  
} */

/* function saludarConParametros(nombre="extraño"){//"juan"
console.log("Hola " + nombre);//Hola juan
}
let nombreIngresado=prompt("Ingresa tu nombre")
/* saludarConParametros("juan")
saludarConParametros("Pedro")
saludarConParametros(nombreIngresado) 
saludarConParametros(nombreIngresado)
saludarConParametros() */

let resultado = 0;//global
console.log(resultado);
function sumar(num1, num2 = 0) {
let  resultado = num1 + num2;
  //console.log(resultado);
  return resultado;
}

console.log(resultado);
console.log(sumar(2,4));



/* let num1 = parseFloat(prompt("Ingresa un numero"));
let num2 = parseFloat(prompt("Ingresa un numero"));
let operacion = prompt("Ingresa la operacion"); */
/* 
let resultSuma=sumar(num1,num2)
console.log(resultSuma);
console.log(resultado); */

function calculadora(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;//valida que num2 sea distinto de cero
    default:
      return "Operación no válida";
  }
}

/* 
let resSuma= calculadora(num1,num2, operacion)
console.log(resSuma);
let resResta= calculadora(num1,num2, "-")
console.log(resResta); */

//funcion anonima

const saludar2 = function (nombre){
  console.log("Hola "+nombre);
}

saludar2("Dani")
// flecha
const saludar3= (nombre)=>{
  console.log("Hola "+nombre);
}
saludar3("jose")