//objeto literal
const libro1 = {
  titulo: "El señor de los anillos",
  autor: "J.R.R. Tolkien",
  edicion: "Edición de colección",
  anioPublicacion: 1954,
  genero: "Fantasía",
};

/* console.log(libro1);
console.log(libro1.titulo);
console.log(libro1.autor); */
//función constructora
/* function Libro(titulo, autor, edicion, anioPublicacion, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.edicion = edicion;
  this.anioPublicacion = anioPublicacion;
  this.genero = genero;

  //método
  this.mostrarInformacion = function () {
    return (
      "Título: " +
      this.titulo +
      "\nAutor: " +
      this.autor +
      "\nEdición: " +
      this.edicion +
      "\nAño de Publicación: " +
      this.anioPublicacion +
      "\nGénero: " +
      this.genero
    );
  };
} */
class Libro {
  constructor(titulo, autor, edicion, anioPublicacion, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.edicion = edicion;
    this.anioPublicacion = anioPublicacion;
    this.genero = genero;
  }
  mostrarInformacion() {
    return (
      "Título: " +
      this.titulo +
      "\nAutor: " +
      this.autor +
      "\nEdición: " +
      this.edicion +
      "\nAño de Publicación: " +
      this.anioPublicacion +
      "\nGénero: " +
      this.genero
    );
  }
}
const libro2 = new Libro(
  "Cien años de soledad",
  "Gabriel Garcia Marquez",
  "Primera edición",
  1967,
  "Realismo mágico"
);

/* console.log(libro2.titulo); */
const libro3 = new Libro(
  "Drácula",
  "Bram Stoker",
  "Edición especial",
  1897,
  "Horror"
);

/*  console.log("titulo" in libro3);
  console.log("editorial" in libro3);
  console.log(libro1.titulo);
  console.log(libro1['titulo']); */

/*   for (const key in libro3) {
   console.log(key +": " +libro3[key]);//libro1["titulo"]
  }
console.log(libro3.mostrarInformacion()); */

//ARRAY []

const numeros = [3, 1, 7, 6, 4, -98, 4, 2, 7, -10];
/* console.log(numeros);
console.log(numeros.length);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[0]+ numeros[5]);
 */
const cajonCubiertos = ["tenedores", "cuchillos", "cucharas", "cuchilla"];

//console.log(cajonCubiertos[2]);

cajonCubiertos[4] = "cucharitas";
cajonCubiertos[5] = "bombilla";
//console.log(cajonCubiertos);

//metodos
//agrega elementos al final (push)
numeros.push(22, 34, 12, 65);
//console.log(numeros);
//metodo quita elelmntos del foinal (pop)
numeros.pop();
//Agregar elementos al inicio (ushift)

numeros.unshift(-100);
//eleiminar del inicio (shift)
numeros.shift();
//elimina desde determinada posicion
numeros.splice(1, 3);

//console.log(cajonCubiertos.join('/'))

/* console.log(numeros);
for(let i =0; i< numeros.length; i++){
  console.log(numeros[i]);
} */
let harina = "Aqui va la harina";
const alacena = ["fideos", "verdudras", "azucar", harina];
/* console.log(alacena);
console.log(cajonCubiertos); */

/* const granAlacena= alacena.concat(cajonCubiertos)
console.log(granAlacena);
//indexOF
console.log(granAlacena.indexOf("tenedores"));
console.log(granAlacena.indexOf("fideos"));

console.log(granAlacena.indexOf("porotos"));
//includes
console.log(granAlacena.includes("porotos"));
console.log(granAlacena.includes("fideos")); */

const listaLibros = [
  { titulo: "Los tres mosqueteros", autor: "Alejandro Dumas" },
  libro1,
];
listaLibros.push(libro2);
console.log(listaLibros);
//crear una funcion que me permita instanciar libros y esos libros los agrego a la lista

function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.stock = parseInt(stock);
  this.mostrarInformacion = function () {
    return (
      "Nombre: " +
      this.nombre +
      " Precio: $" +
      this.precio +
      " Stock: " +
      this.stock
    );
  };
  this.mostrarStock = () => {
    return this.stock;
  };
}

const listaProductos = [];

const nuevoProd = new Producto("Harina", 800, 5);
listaProductos.push(nuevoProd);
/* alacena.push(nuevoProd)
console.log(alacena); */
console.log(listaProductos);
console.log(nuevoProd.mostrarInformacion());
console.log(nuevoProd.mostrarStock());
