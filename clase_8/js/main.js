const tickets3D = [
  { id: 1, pelicula: "Ant-man Quantunmania", precio: 2400 },
  { id: 2, pelicula: "Super Mario Bros, la película", precio: 2300 },
  { id: 3, pelicula: "John Wick 4", precio: 2600 },
  { id: 4, pelicula: "The Wale", precio: 2200 },
  { id: 5, pelicula: "Shazam, la furia de los dioses", precio: 2575 },
  { id: 6, pelicula: "Creed 3", precio: 2389 },
  { id: 7, pelicula: "The Marvels", precio: 1500 },
];

/* function buscarPelicula(arr, titulo) {
  return arr.find((el) => el.pelicula.includes(titulo));
}
const encontrado = buscarPelicula(tickets3D, "Creed 3");
console.log(encontrado);

const ticketsReserva = [];
console.log(ticketsReserva);
function reservar(arr, pelicula) {
  arr.push(pelicula); //ticketsReserva.push(pelicula)
  return arr;
}
reservar(ticketsReserva, encontrado);
console.log(ticketsReserva);

function comparTicket(tickets,recargo){
  return tickets.reduce((acc,el)=> {
    return acc = acc + el.precio
  },recargo)
}

const compra= comparTicket(ticketsReserva, 1300)
console.log(compra); */
/* const PI=Math.PI
console.log(PI);
console.log(Math.min(1,3,2,5,7,5,0,9,-23,PI));
console.log(Math.max(1,3,2,5,7,5,0,9,-23,PI));
console.log(Math.ceil(4.01));//redondea hacia arriba
console.log(Math.round(PI));
console.log(Math.round(4.49));//redondea del .5 para arriba del .49 para abajo
console.log(Math.floor(4.99));
let random=Math.random()*30 +20
console.log(Math.floor(random)); */
const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let color = "";
for (let i = 0; i < 6; i = i + 1) {
  let aleatorio = Math.floor(Math.random() * hexa.length);
  /* console.log(aleatorio);
  console.log(hexa[aleatorio]); */
  color = color + hexa[aleatorio];
}
//console.log("el color aleatorio es #" + color );
//generar una funcion que cree un token aleatorio. Ejemplo:56736

//Date

let fecha = new Date(2020, 1, 3);
/* console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds()); */
/* console.log(fecha.getTime()); */
function calcularEstadia(ingreso, egreso) {
  let fIngreso = new Date(ingreso).getTime();
  let fEgreso = new Date(egreso).getTime();
  //validar que ingreso no sea mayor que egreso
  let dias = (fEgreso - fIngreso) / 86400000;
  return dias;
}
let estadia = calcularEstadia("2024 2 15", "2024 2 19");
//console.log("La cantidad de dias de hospedaje es: " + estadia + " días");

/* let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
  if (edad >= edadObligatoria && edad <= edadLimite) {
  return "Estás obligado/a a votar";
} else if (edad >= edadOptativa || edad > edadLimite) {
  return "Podés votar, si querés";
} else {
  return "No podés votar todavía";
} */

function validarVotacion(fechaNac) {
  let fechaNacimento = new Date(fechaNac);
  let fechaActual = new Date();

  let edad = fechaActual.getFullYear() - fechaNacimento.getFullYear();
  //console.log(edad);
  let edadObligatoria = 18;
  let edadOptativa = 16;
  let edadLimite = 69;
  if (edad >= edadObligatoria && edad <= edadLimite) {
    return "Estás obligado/a a votar";
  } else if (edad >= edadOptativa || edad > edadLimite) {
    return "Podés votar, si querés";
  } else {
    return "No podés votar todavía";
  }
}

let res = validarVotacion("2020 02 1");
console.log(res);
