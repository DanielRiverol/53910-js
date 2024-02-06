//objeto literal
const libro1 = {
  titulo: "El señor de los anillos",
  autor: "J.R.R. Tolkien",
  edicion: "Edición de colección",
  anioPublicacion: 1954,
  genero: "Fantasía",
};

//función constructora
function Libro(titulo, autor, edicion, anioPublicacion, genero) {
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
}

const libro2 = new Libro(
  "Cien años de soledad",
  "Gabriel Garcia Marquez",
  "Primera edición",
  1967,
  "Realismo mágico"
);
const libro3 = new Libro(
  "Drácula",
  "Bram Stoker",
  "Edición especial",
  1897,
  "Horror"
);

