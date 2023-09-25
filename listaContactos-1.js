const listaDeContactos = [
  {
    nombreyApellido: "Diana Karolina Acosta Romero",
  },
  {
    nombreyApellido: "Maria Paola Garzon Vargas",
  },
  {
    nombreyApellido: "Fabian Stiven Rodriguez Martinez",
  },
  {
    nombreyApellido: "Kevin Camilo Cortez Fonseca",
  },
  {
    nombreyApellido: "Leydi Marcela Romero",
  },
];

function añadirContacto(nombreyApellido) {
  listaDeContactos.push(nombreyApellido);
  console.log(`Contacto" ${nombreyApellido} "agregado.`);
}

function borrarContacto(nombreyApellido) {
  const index = listaDeContactos.indexOf(nombreyApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
    console.log(`Contacto " ${nombreyApellido}"eliminado.`);
  } else {
    console.log(`El contatco "${nombreyApellido}" nose encontro en la lista`);
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
imprimirListaDeContactos();

borrarContacto("Leydi Marcela Romero");
imprimirListaDeContactos(); */
