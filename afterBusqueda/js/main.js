const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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
/* function mostrarDatosArray(array) {//servicios / nums
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

console.log(servicios.length);
const nums=[1,4,2,6,4,23,56,8,9]

mostrarDatosArray(servicios)
mostrarDatosArray(nums) */

function Servicio(nombre, precio, img) {
  this.id=servicios.length +1 ;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  if (img) {
    this.img = img;
  } else {
    this.img = "https://via.placeholder.com/300";
  }
}

//console.log(servicios);

const newService= new Servicio("depilación", 3500,"img.jpg")
servicios.push(newService)
servicios.push(new Servicio("Jacuzzi", 20000))
//console.log(servicios);

//servicios.forEach((el)=> console.log(el))
/* servicios.find(el=>{
  return el.nombre == filtro
}) */
function buscarPorNombre(arr, filtro){
  //validar que filtro no sea vacio
  //return arr.find(el=>el.nombre == filtro)
  return arr.find(el=>el.nombre.includes(filtro))
}
const encontrado= buscarPorNombre(servicios, "mas")
//console.log(encontrado);

function filtrarPrecio(arr, filtro){
  return arr.filter(el=>{
    return el.precio <= filtro
  })
}
/* let precio= 2500
const masBaratos= filtrarPrecio(servicios, precio)
console.log(masBaratos);
const  masMasBaratos= filtrarPrecio(masBaratos, 1580)
console.log(masMasBaratos); */


function filtrarPorRango(arr, masBajo, masAlto){
  //validalo if(condicion){return}
  return arr.filter(el=>{
    const precio= el.precio;
    return precio >= masBajo && precio <= masAlto;
  })
}
 const rango= filtrarPorRango(servicios, 2000, 5000)
console.log(rango);