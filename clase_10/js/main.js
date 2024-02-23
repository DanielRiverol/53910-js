const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canada"
];
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
const caja = document.getElementById("caja");
///console.log(caja[0]);
//const titSec= document.querySelectorAll('#div')da null

//addEventListener
caja.addEventListener("click", () => {
  console.log("Hiciste click");
});
//prefijo onNOMBREEVENTO

/*  caja.onclick = ()=>{
  console.log("Hiciste click desde el prefijo on");
} */

/* caja.addEventListener("mousedown", ()=>{
  console.log("Presionaste el boton");
})
caja.addEventListener('mouseup',()=>{
  console.log("Soltaste el boton");
}) */

/* caja.addEventListener('mouseenter',()=>{
  //alert('Entraste a la caja')
  caja.style.backgroundImage= "url(./img/estados.jpg)"
})
caja.addEventListener('mouseleave',()=>{

  caja.style.backgroundImage= "url(./img/australia.jpg)"

})
caja.addEventListener('click',()=>{
  caja.style.backgroundImage= "url(./img/pum.png)"
})
 */
//scroll
const popup = document.querySelector(".pop-up"),
  btnClose = document.querySelector(".btn-close");

// function mostrarPopup() {
//   if (window.scrollY > 100) {
//     popup.classList.add("visible");
//   }
// }
// window.addEventListener("scroll", mostrarPopup);

// btnClose.addEventListener("click", () => {
//   popup.classList.remove("visible");
//   window.removeEventListener("scroll", mostrarPopup);
// }); 

const ingreso = document.querySelectorAll("input"),
  btnSearch = document.querySelector("#btnSearch"),
  contenedor = document.querySelector("#contenedor");
//console.log(ingreso);
const inputSearch = ingreso[0];

function crearHtml(el) {
  //llamo al elemento contenedor
  contenedor.innerHTML = "";
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn" id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor

  //modificar para que muestre un cartel producto no encontrado
  contenedor.innerHTML = html;
}

/* inputSearch.addEventListener("keyup", () => {
  const encontrado= buscarServicio(servicios,inputSearch.value)
  crearHtml(encontrado)
  console.log(encontrado);
}); */

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputSearch.value);
  crearHtml(encontrado);
});

const nombre = ingreso[1];
const edad = ingreso[2];

/* nombre.addEventListener('change',()=>{
  console.log("Cambio");
})
edad.addEventListener('change',()=>{
  console.log("Cambio");
}) */

const select = document.querySelector("#paises");
paises.forEach((pais) => {
  let option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;
  select.append(option);
});

select.addEventListener('change', ()=>{
  let option = select.options[select.selectedIndex].value
  console.log(option);
  
})