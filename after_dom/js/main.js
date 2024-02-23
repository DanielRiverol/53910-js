const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];
const talles = ["xs", "s", "m", "xl", "xxl"];

//cargar opciones en select


//constructor Producto
class Producto {
  constructor(nombre, descripcion, precio, talle, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.talle = talle;
    if (img == "") {
      this.img = "https://via.placeholder.com/250";
    } else {
      this.img = img;
    }
  }
}
//Guardar producto
function guardarProducto(producto) {
  return productos.push(producto);
}

//funcion crearHtml

//Evento para guardar

