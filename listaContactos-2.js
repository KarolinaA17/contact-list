const listaDeContactos = [
  {
    Nombre: "Diana Karolina",
    Apellido: "Acosta Romero",
    Numero: 3219309832,
    Direccion: "Avenida calle 116#80a-25, Bogota",
    Correo: "dianakarolinaacostaromero17@gmail.com",
  },
  {
    Nombre: "Maria Paola",
    Apellido: "Garzon Vargas",
    Numero: 3132581652,
    Direccion: "paola.vargas1@gmail.com",
    Correo: "Calle 7 #05-12, Cumaral",
  },
  {
    Nombre: "Fabian Stiven",
    Apellido: " Rodriguez Martinez",
    Numero: 3155891235,
    Direccion: " Carrera 42 #30-15, Villavicencio",
    Correo: "fabianstiven.rm@gmail.com",
  },
  {
    Nombre: "Kevin Camilo",
    Apellido: "Cortez Fonseca",
    Numero: 3235891650,
    Direccion: "Calle 78 #56-85, Bogota",
    Correo: "kevin.cortez23@gmai.com",
  },
  {
    Nombre: "Leydi Marcela",
    Apellido: "Romero",
    Numero: 3132988465,
    Direccion: "Manzana C, casa 12, Cumaral",
    Correo: "leydiromero.12@gmail.com",
  },
];

function añadirContacto(Nombre, Apellido, Numero, Direccion, Correo) {
  const nuevoContacto = {
    Nombre: Nombre,
    Apellido: Apellido,
    Numero: Numero,
    Direccion: Direccion,
    Correo: Correo,
  };
  listaDeContactos.push(nuevoContacto);
}
añadirContacto(
  "Mauricio Alejandro",
  "Acosta Garavito",
  3104066350,
  "Calle 26 #15-05, Cumaaral",
  "macosta19@gmail.com"
);
console.log(`Contacto "${añadirContacto}" agregado.`);
