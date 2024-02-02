function saludar(nombre) {
  let saludoCompleto = "Hola " + nombre;
  return saludoCompleto;
}
//console.log(saludoCompleto);

/* const saludar = function(nombre){
    return 'Hola ' + nombre
 }
 */

/* const saludar= (nombre)=>{ //return tradicional
    return 'Hola ' + nombre  
 } */
//const saludar= (nombre)=>'Hola ' + nombre
/*  
let saludo1= saludar("Pablo");
console.log(saludo1); */
//Objeto literal

const contacto1 = {
  nombre: "Pedro",
  apellido: "Lopez",
  edad: 34,
  direccion: "Calle Falsa 123",
  email: "pedro@mail.com",
};

/* console.log(contacto1);
console.log(contacto1.nombre);
console.log(contacto1.apellido); */
let nombrecompletoC1 = contacto1.nombre + " " + contacto1.apellido;

//console.log(nombrecompletoC1);
const contacto2 = {
  nombre: "Rodrigo",
  apellido: "Vazquez",
  edad: 30,
  direccion: "Calle Falsa 123",
  tel: "90652437125",
  emergencia: {
    nombre: "Carlos",
    tel: "123456789",
    parentezco: "Tio",
  },
};
/* console.log(contacto2.emergencia.nombre);
console.log(contacto2.emergencia.tel); */
/* const emergenciaRodri= contacto2.emergencia
console.log(emergenciaRodri);
console.log(emergenciaRodri.nombre);
console.log(emergenciaRodri.tel);
console.log(emergenciaRodri.parentezco); */

/* console.log(contacto2);
console.log(contacto2.nombre);
console.log(contacto2.apellido);
console.log(contacto2["edad"]);
console.log(contacto2.edad);
console.log(contacto2.tel);

contacto2.tel= "123456789"

console.log(contacto2.tel);

contacto1.tel="34567898754367"
console.log(contacto1); */

function Contacto(nombre, apellido, direccion, tel) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
  this.tel = tel;
//const hablar = function(){}
  this.hablar = function () {
   return "Soy un objeto de tipo contacto y me llamo " + this.nombre;
  };
 
}
//let nombreINgresado= prompt("Ingresa TU NOMBRE")
const contacto3 = new Contacto(
  "Pablo",
  "Perez",
  "Av Hamburguesa 1234",
  "234567890"
);
const contacto4 = new Contacto("Maria", "Robles", "Lala 1234", "234567890");

console.log(contacto4);
console.log(contacto3);
//Crear un script que me permita instanciar 3 objetos de tipo contacto ingresados por el usuario

/* let mensaje = "Hola tarola";

console.log(mensaje.length);
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());
 */
/* console.log(contacto3.hablar())
console.log(contacto4.hablar())
contacto4.hablar() */

function Libro(titulo, autor, precio, stock){
    this.titulo= titulo;
    this.autor= autor;
    this.precio= precio;
    this.stock= stock;

    this.vender= ( cantidad)=>{
        //reducir el stock
                return this.precio * cantidad
    }

    //muestre el stock disponible 

}

const libro1= new Libro("Harry Potter y la piedra filosofal","JK Rowling", 12000, 10)

const libro2= new Libro("Harry Potter 2","JK Rowling", 15000, 15)

console.log(libro1.vender(2));
console.log(libro2.vender(4));