const contenedor = document.querySelector("#contenedor");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("#message");
const form = document.querySelector("#form-login");

//variables auxiliares para acceder a los inputs por separado
const inputUser = inputs[0];
const inputPass = inputs[1];
const check = inputs[2];
const btnIngresar = inputs[3];

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
    stock: 2,
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
  //validar que pasa cuando no recibo ningún array
  let html;
  for (const servicio of arr) {
    //desestructurar el 'servicio'
    const { img, nombre, precio, id } = servicio;

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



const persona = {
  nombre: "Juanito Arcorirs",
  edad: 18,
  activo: true,
};


const persona1 = {
  nombre: "Juanito Arcorirs",
  edad: 18,
  activo: true,
};

//destructurig de objetos
const persona4 = {
  nombre: "Homero",
  edad: 38,
  activo: false,
  familia: {
    nombre: "Marge",
  },
};

// const nombre= persona4.nombre
// const edad= persona4.edad

// console.log(nombre);
// console.log(edad);

const { nombre, activo, familia } = persona4;
const { nombre: nombreFamilia } = familia; //alias
console.log(nombre);
console.log(activo);
console.log(nombreFamilia);