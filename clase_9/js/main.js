const productos = [
  { id: 1, nombre: "arroz integral", precio: 89 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideo", precio: 124 },
  { id: 7, nombre: "fideo", precio: 160 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
  
];
const personas = [
  "Matias",
  "Pablo",
  "Maria",
  "Tobias",
  "Marcia",
  "Kevin",
  "Karen",
  "Federico",
  "Carolina",
  "Facundo",
  "Camila",
  "Stefi",
  "Augusto",
  "Jessica",
  "Carla",
  "Bautista",
  "Rodri",
  "German",
];
//console.dir(document.body)
//metodos de acceso
const tituloPrincipal=document.getElementById("titulo")
const tituloSecundario=document.getElementById("secundario")

/* console.log(tituloPrincipal);
console.log(tituloSecundario);
 */
//Acceso por className
const listado= document.getElementsByClassName("lista")
for (const lista of listado) {
 // console.log(lista);
}

//acceso tagName
/* const div= document.getElementsByTagName("div") 
console.log(div); */
const paises= document.getElementsByClassName('pais')
let pais="PARAGUAY"
paises[1].innerText=pais;
paises[2].innerHTML="<em>CHILE</em>";

for (const pais of paises) {
  console.log(pais.innerText);
}
//tituloSecundario.style.backgroundColor="red"
//pasale la funcion random
/* let n=31;
if(n>30){
  tituloSecundario.className="box"
} */
const mensaje= document.createElement("p")
mensaje.innerText="Soy un parrafo creado desde JS";

const contenedor= document.getElementById('contenedor')

contenedor.append(mensaje)
//document.body.append(mensaje)

//Acceder al valor del input
const inputNombre= document.getElementById("nombre")
const inputApellido= document.getElementById("apellido")

console.log(inputNombre.value);
console.log(inputApellido.value);


const listaAlum= document.getElementById('nombres')
for (const nombre of personas) {
  const li= document.createElement('li')
  li.innerHTML= nombre;
  listaAlum.append(li)
}
//platillas literales
const producto= {
  nombre:"Papas",
  precio: 230
}

let concatenado="Producto: " + producto.nombre + ", precio: $"+ producto.precio;
let template= `Producto: ${producto.nombre}, precio: $${producto.precio}`;

contenedor.innerText= template

const listaProd= document.getElementById("productos")
for (const producto of productos) {
  const li= document.createElement('li')
  li.innerHTML= `<div class="card">
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>
</div>`;
  listaProd.append(li)
}
