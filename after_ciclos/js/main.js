//💰El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo 💵
  b- Retiro 💸
  c- Depósito 💰
  d- Salir ❌
4- Al finalizar mostrar mensaje
*/

let pinGuardado = "5701";
let ingresar = false;

for (let i = 2; i >= 0; i--) {
  let ingreso = prompt("Ingresa tu clave");
  if (pinGuardado === ingreso) {
    alert("Bienvenido");
    ingresar = true;
    break;
  } else {
    alert("Error");
  }
}

if (ingresar) {
  let saldo = 20000;
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion !== "x") {
    if (opcion == "1") {
      alert("Tu saldo es " + saldo);
    } else if (opcion == "2") {
      let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
      alert("Retiraste : $" + retiro + " Tu saldo es :$" + (saldo - retiro));

      //De tarea  que pasa si quiero mas de lo que tengo
    } else if (opcion == "3") {
      let deposito = parseFloat(prompt("Ingresa el monto a depositar"));
      alert(
        "Depositaste : $" + deposito + " Tu saldo es :$" + (saldo + deposito)
      );
    }

    //condicion de salida
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Retendremos la tarjeta");
}
