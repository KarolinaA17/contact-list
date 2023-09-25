const listaDeContactos = [
  {
    nombreApellido: "Diana Karolina Acosta Romero",
  },
  {
    nombreApellido: "Maria Paola Garzon Vargas",
  },
  {
    nombreApellido: "Fabian Stiven Rodriguez Martinez",
  },
  {
    nombreApellido: "Kevin Camilo Cortez Fonseca",
  },
  {
    nombreApellido: "Leydi Marcela Romero",
  },
];

function añadirContacto(nombreApellido) {
  listaDeContactos.push(nombrApellido);
  console.log(`Contacto" ${nombreApellido} "agregado.`);
}

function borrarContacto(nombreApellido) {
  const index = listaDeContactos.indexOf(nombreApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
    console.log(`Contacto " ${nombreApellido}"eliminado.`);
  } else {
    console.log(`El contatco "${nombreApellido}" nose encontro en la lista`);
  }
}

function imprimirListaDeContactos() {
  console.log("LISTA DE CONTACTOS:");
  gi;
  for (const contacto of listaDeContactos) {
    console.log(contacto);
  }
}

imprimirListaDeContactos();

/* añadirContacto("Erika Garzon Acosta");
imprimirListaDeContactos();

borrarContacto("Leydi Marcela Romero");
imprimirListaDeContactos(); */
