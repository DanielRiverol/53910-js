const card = document.querySelector(".card");
const lista = document.querySelector(".lista");
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

//PROMESAS
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

// console.log("YO:");
// console.log("Hace un tiempo te presté un CD. ¿Te acordás?");
//  console.log("EL/ELLA: ");
// devolverCD(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("Bueno Gracias");
//   });

/* Funciones */
// función que genera la vista de los servicios

const renderServicios = (arr) => {
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;
    html = `
        <div class="card">
      		<div class="card-image">
        	<img src="../img/${img}">
        	<span class="card-title">${nombre.toUpperCase()}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
        <button class="btn btn-normal" id="${id}">Comprar</button>
      </div>
     </div>
     `;
    contenedor.innerHTML += html;
  }
};

const pedirServicios = (arr) => {
  //Instanciar promesa
  contenedor.innerHTML = "Cargando...";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("error de datos");
      }
    }, 2500);
  });
};
// let products = [];

// pedirServicios(servicios)
// .then((respuesta)=>{
//   products= respuesta
//   renderServicios(products)
// }).catch(error=>{
//   contenedor.innerHTML=error
// })
//Fetch
//JSON.
// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((posts) => {
//     for (const post of posts) {
//       console.log(post);
//       const li = document.createElement("li");
//       li.className = "card";
//       li.innerHTML = `
//             <h2>${post.title}</h2>
//               <p>${post.body}</p>`;
//           lista.append(li)
//     }
//   });
// //POST NOSOTROS NO LO PODEMOS REALIZAR SIN UN BACKEND
// const post= {id:200,
// title:"SOY UN NUEVO POST",
// body:"LOREM IPSUM",
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// }).then(response=>response.json())
// .then(data=>{
//   console.log(data);
// });
//DATOS LOCALES
// fetch("./db/db.json")
//   .then((res) => res.json())
//   .then((data) => {
//     const { servicios } = data;
//     console.log(servicios);
//     renderServicios(servicios)
//   });

  //async await
const getData = async (url)=>{
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  
  const { servicios } = datos;
  
  renderServicios(servicios)
}
const API_URL = "./db/db.json";
getData(API_URL);