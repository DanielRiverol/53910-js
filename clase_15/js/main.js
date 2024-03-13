const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

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

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(2);
//setTimeOut 1000ms= 1s
// setTimeout(() => {
//   console.log("Mientras tanto...");
// }, 0);
// console.log("Inicio del proceso");
// console.log("Fin del proceso");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     card.classList.remove("active");
//   }, 2500);
//   card.classList.add("active");
// });
btn.addEventListener("click", () => {
  btn.innerHTML = `Espere <i class="fa-solid fa-spinner animation"></i>`;
  card.classList.add("active");
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = "Click";
    card.classList.remove("active");
    btn.disabled = false;
  }, 2500);
});

// setTimeout(() => {
//   for (const letra of "Hola") {
//     console.log(letra);
//   }
// }, 2500);
// setTimeout(() => {
//   for (const letra of "Juan") {
//     console.log(letra);
//   }
// }, 1500);
//setInterval
// let contador = 0;
// let interval = setInterval(() => {
//   contador++;
//   console.log(contador);
//   if (contador === 10) {
//     clearInterval(interval);
//   }
// }, 1000);

//PROMESAS
// console.log(
//   new Promise((resolve, reject) => {
//     //cuerpo de la promesa
//   })
// );

const eventoFuturo = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === true) {
        resolve("Promesa resuelta");
      } else {
        reject("Promesa rechazada");
      }
    }, 3000);
  });
};

//console.log(eventoFuturo(true));
//console.log(eventoFuturo(false));
const devolverCD = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === true) {
        resolve("Si tomá gracias por prestarlo");
      } else {
        reject("Uh lo perdí");
      }
    }, 3000);
  });
};

//console.log(devolverCD(false));
// devolverCD(true).then((res) => {
//   console.log(res);
// });
// devolverCD().catch((error) => {
//   console.log(error);
// });
//console.log("Ejecucion");
console.log("Te acordas el cd que te presté?");
devolverCD(false)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
