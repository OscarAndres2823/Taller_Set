// Programa para gestionar lista de invitados
const invitados = new Set();

function agregarInvitado(nombre) {
  invitados.add(nombre);
}

function eliminarInvitado(nombre) {
  invitados.delete(nombre);
}

function mostrarInvitados() {
  console.log(invitados);
}


