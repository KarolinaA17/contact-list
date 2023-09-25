const listaDeContactos = [
  "Diana Karolina Acosta Romero",
  "Maria Paola Garzon Vargas",
  "Fabian Stiven Rodriguez Martinez",
  "Kevin Camilo Cortez Fonseca",
  "Leydi Marcela Romero",
];

function añadirContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
  console.log(`Contacto "${nombreApellido}" agregado.`);
}

function borrarContacto(nombreApellido) {
  const index = listaDeContactos.indexOf(nombreApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
    console.log(`Contacto " ${nombreApellido}"eliminado.`);
  } else {
    console.log(`El contacto" ${nombreApellido} "no se encontro en la lista`);
  }
}

function imprimirListaDeContactos() {
  console.log("LISTA DE CONTACTOS:");
  for (const contacto of listaDeContactos) {
    console.log(contacto);
  }
}
imprimirListaDeContactos();

/* añadirContacto("Erika Garzon Acosta");
imprimirListaDeContactos();*/

// borrarContacto("Maria Paola Garzon Vargas");
// imprimirListaDeContactos();
