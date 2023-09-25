const listaDeContactos = [
  {
    Nombre: "Diana Karolina",
    Apellido: "Acosta Romero",
    Numero: 3219309832,
    Direccion: "Avenida calle 116#71a-25, Bogota",
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
  console.log(
    `Contacto" ${(Nombre, Apellido, Numero, Direccion, Correo)} "agregado.`
  );
}

function borrarContacto(Nombre, Apellido, Numero, Direccion, Correo) {
  const eliminarContacto = {
    Nombre: Nombre,
    Apellido: Nombre,
    Numero: Numero,
    Direccion: Direccion,
    Correo: Correo,
  };
  if (eliminarContacto !== -1) {
    listaDeContactos.splice(eliminarContacto, 1);
    console.log(`Contacto " ${Nombre}"eliminado.`);
  } else {
    console.log(
      `El contacto "${
        (Nombre, Apellido, Numero, Direccion, Correo)
      }" no se encontro en la lista`
    );
  }
}

function imprimirListaDeContactos() {
  console.log("LISTA DE CONTACTOS:");
  for (const contacto of listaDeContactos) {
    console.log(contacto);
  }
}
/*
añadirContacto(
  "Mauricio Alejandro",
  "Acosta Garavito",
  3105895420,
  "Manzana C, Casa 12, Cumaral",
  "macosta19@gmail.com"
);
imprimirListaDeContactos(); */

borrarContacto(
  "Diana Karolina",
  "Acosta Romero",
  3219309832,
  "Avenida calle 116#71a-25, Bogota",
  "dianakarolinaacostaromero17@gmail.com"
);
imprimirListaDeContactos();
