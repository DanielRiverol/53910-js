const contenedor = document.querySelector("#contenedor");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("#message");
const form = document.querySelector("#form-login");

//variables auxiliares para acceder a los inputs por separado
const inputUser = inputs[0];
const inputPass = inputs[1];
const check = inputs[2];
const btnIngresar = inputs[3];
// console.log(inputUser);
// console.log(inputPass);
// console.log(check);
// console.log(btnIngresar);
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
    stock:2
  },
];

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

// Función para crear estructura html
function crearHtml(arr) {
  contenedor.innerHTML = "";
  //validar que pasa cuando no recibo recibo ningun
  let html;
  for (const servicio of arr) {

    //desestructurar el 'el'
    const {img, nombre, precio, id}= servicio;

    html = `<div class="card">
                <img src=" ./img/${img}" alt="${nombre}">
                <hr>
                <h3>${nombre}</h3>
                <p>Precio: $${precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    contenedor.innerHTML += html;
  }
}
crearHtml(servicios);

function guardarEnStorage(storage) {
  let user = { usuario: inputUser.value, pass: inputPass.value };
  if (user.usuario == "" || user.pass == "") {
    p.innerHTML = "Los campos no pueden estar vacíos";
    return;
  }
  // if (storage == "local") {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }
  // if (storage == "session") {
  //   sessionStorage.setItem("user", JSON.stringify(user));
  // }
  storage == "local" && localStorage.setItem("user", JSON.stringify(user));
  storage == "session" && sessionStorage.setItem("user", JSON.stringify(user));
}
//guardarEnStorage()

form?.addEventListener("submit", (e) => {
  e.preventDefault();
 /*  if (check.checked) {
    guardarEnStorage("local");
  } else {
    guardarEnStorage("session");
  } */
  check.checked ? guardarEnStorage("local") : guardarEnStorage("session"); 
});

//operador ternario
let temp = 29;

// if(temp > 30){
//   console.log("Dia caluroso");
// }else{
//   console.log("Dia agradable");
// }

//condicion ? true : false

//temp > 30 ? console.log("Dia caluroso") : console.log("Dia Agradable");

const persona = {
  nombre: "Juanito Arcorirs",
  edad: 18,
  activo: true
};

/* let permiso;
if (persona.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}

if(permiso){
  console.log("Podes entrar al casino");
}else{
  console.log("NO Podes entrar al casino");
}
 */
let permiso = persona.edad >= 18 ? "Podes entrar": "No podes entrar" ;
//console.log(permiso);
//OP AND &&

const carrito=[1,2,3,4,5,6,4]
if(carrito.length == 0){
  //console.log("Carrito Vacio");
}

//AND
//carrito.length == 0 && (console.log("CARRITO VACIO"));

let registroIngreso= persona.activo && "Bienvenido"

//console.log(registroIngreso);

const persona1 = {
  nombre: "Juanito Arcorirs",
  edad: 18,
  activo: true,
};

const persona2=undefined;

// console.log(persona1 || "La persona no existe");
// console.log(persona2 || "La persona no existe");

/* let carrito1;

let carritoLS= JSON.parse(localStorage.getItem("carrito"))

if(carritoLS){
  carrito1= carritoLS
}else{
  carrito1=[]
}
console.log(carrito1); */
localStorage.setItem("carrito", JSON.stringify(carrito));
const carrito1 = JSON.parse(localStorage.getItem("carrito")) || [];
//console.log(carrito1);

console.log(persona2?.nombre || "Esa propiedad no existe");
console.log(persona1.nombre);

//destructurig de objetos
const persona4 = {
  nombre: "Homero",
  edad: 38,
  activo: false,
  familia: {
    nombre: "Marge"
  }
};


// const nombre= persona4.nombre
// const edad= persona4.edad

// console.log(nombre);
// console.log(edad);

const {nombre, activo, familia} = persona4
const {nombre: nombreFamilia}= familia ;//alias
console.log(nombre);
console.log(activo);
console.log(nombreFamilia);
