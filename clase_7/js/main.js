function Libro(titulo, autor, precio) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = parseFloat(precio);
}

const listaDeDeseos = [];
function pedirLibros(arr, cant) {
  do {
    let titulo = prompt("INgresa el titulo del libro");
    let autor = prompt("INgresa el autor del libro");
    let precio = prompt("INgresa el precio del libro");
    const newLibro = new Libro(titulo, autor, precio);
    //condicion
    arr.push(newLibro);
  } while (arr.length != cant);
}
/* 
console.log(listaDeDeseos.length);
pedirLibros(listaDeDeseos,2)
console.log(listaDeDeseos);
console.log(listaDeDeseos.length);
console.log(listaDeDeseos[0]);
console.log(listaDeDeseos[1]); */
let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
}
//console.log(total);
function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}

/*  console.log(sumarRango(1,10));
  console.log(sumarRango(1,6));
  console.log(sumarRango(1,20));
  console.log(sumarRango(-1,20)); */
function mayorQue(n) {
  return (m) => m > n;
}
/* let mayorQueDiez=mayorQue(10)//(m)=> m > 10
  //console.log(mayorQue(10));//(m)=> m > 10
  console.log((mayorQueDiez(6)));//(6)=> 6 > 10
  console.log((mayorQueDiez(16)));//(16)=> 16 > 10 */

function asignarOperacion(op) {
  switch (op) {
    case "suma":
    case "+":
      return (n1, n2) => n1 + n2;
    case "resta":
      return (n1, n2) => n1 - n2;
  }
}
/* 
  const suma= asignarOperacion("+")
  console.log(suma);
  console.log(suma(2,4));

  const resta= asignarOperacion("resta")
  console.log(resta(10,4)); */

//recibir un funcion por parametro

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* console.log(nums); */
/* for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
    
} */
/* for (const element of nums) {
    console.log(element);
}   */
const cadenas = ["Hola", "soy", "un", "mensaje"];
cadenas.push(".");
function porCadaUno(arr, funcion) {
  for (const element of arr) {
    //arr = nums
    funcion(element); //console.log
  }
}

/* porCadaUno(nums,console.log)
  porCadaUno(nums,alert) */
/*  porCadaUno(cadenas, alert)
  porCadaUno() */
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];

//porCadaUno(servicios, console.log)
//foreach
/* servicios.forEach((servicio) => {
  console.log(servicio.nombre);
  console.log(servicio.precio);
}); */

//find devuelve un elemento que conicida u=con determinada condicion
/* 
const precioMenor=servicios.find((servicio) => {
  return servicio.nombre.includes("ñ");
});
console.log(precioMenor); */
//filter devuelve un array

/* const masBaratos= servicios.filter((el)=>{
    return el.precio < 1500
})

console.log(masBaratos);
const elMasBarato= masBaratos.filter(el=>{
    return el.precio <=1200
})
console.log(elMasBarato);

const existe= servicios.some(el=>{
    return el.nombre == "uña"
})

console.log(existe);
 */
//map
let precioActualizado= servicios.map(el=>{
    return {
        id: el.id,
        nombre:el.nombre,
        precio: el.precio *1.10,
        img:el.img
    }
})
console.log(precioActualizado);

const totalInventario =servicios.reduce((acc, el)=>{
return el.precio + acc
},2000)

console.log(totalInventario);