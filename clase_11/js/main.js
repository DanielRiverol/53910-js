const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso"),
  contenedor = document.querySelector("#contenedor");
const inputUser = document.querySelector("#user");
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
  for (const el of arr) {
    html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${el.id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}
//evento
btnSearch.addEventListener("click", () => {
  const filtrado = filtrarServicio(servicios, inputIngreso.value);
  crearHtml(filtrado);
});

//submit
const formulario = document.querySelector("#form-login");

//console.log(formulario);
// formulario.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target);
//   console.log(event.target[0].value);
//   console.log(event.target[1].value);
//   console.log(inputUser.value);
//   //console.log("Formulario enviado");
// });

//setear el LS
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// localStorage.setItem("saludo", "Hola mundo");
// localStorage.setItem("darkMode", true);
// localStorage.setItem("edad", 40);
// localStorage.setItem("numeros", numeros);

// //recurprar la info  del LS

// let saludo = localStorage.getItem("saludo");
// let modoOscuro = localStorage.getItem("darkMode") == "true";
// let edad = parseInt(localStorage.getItem("edad"));
// let numLS = localStorage.getItem("numeros").split(",");
// console.log(saludo);
// console.log(modoOscuro);
// console.log(edad);
// console.log(numLS);

// //sessionStorage
// sessionStorage.setItem("saludo", "Hola");

//elimiar claves de LS o SS
//sessionStorage.removeItem("saludo"); // elimina de acuerdo a la clave
//localStorage.clear(); //elimina todo

//almacenar objetos
const producto = { nombre: "zapatilla", modelo: "air", marca: "nike" };

const prodEnJson = JSON.stringify(producto);

localStorage.setItem("producto", prodEnJson);

const prodDesdeLS = JSON.parse(localStorage.getItem("producto"));
console.log(prodDesdeLS.marca);

const carrito = [];
const encontrado = buscarServicio(servicios, "mani");
carrito.push(encontrado);
carrito.push(servicios[5]);

localStorage.setItem("carrito", JSON.stringify(carrito));

const carritoDesdeLS = JSON.parse(localStorage.getItem("carrito"));

console.log(carritoDesdeLS);
//crearHtml(carritoDesdeLS)
const btnMostrar = document.querySelector(".btn-success"),
  btnQuitar = document.querySelector(".btn-delete");

btnMostrar.addEventListener("click", () => {
  const carritoDesdeLS = JSON.parse(localStorage.getItem("carrito"));
  crearHtml(carritoDesdeLS);
});

btnQuitar.addEventListener("click", () => {
  contenedor.innerHTML = "Tu carrito esta vacio";
  localStorage.removeItem("carrito");
});
//hagamos una funcion que calcule el total del carrito