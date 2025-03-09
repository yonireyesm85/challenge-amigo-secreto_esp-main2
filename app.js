// El principal objetivo de este desafío es fortalecer tus
// habilidades en lógica de programación. Aquí deberás
// desarrollar la lógica para resolver el problema.

// Array para almacenar amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const nombre = document.getElementById("amigo").value;

  // Validar la entrada
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return; // Termina la ejecución de la función si está vacío
  }

  // Actualizar el arreglo de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // Mostrar la lista de amigos en la interfaz
  mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrarla

  // Recorrer el arreglo de amigos y crear elementos <li> para cada uno
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
  // Obtener el elemento de la lista donde se mostrarán los amigos
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente antes de agregar nuevos elementos
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo de amigos y crear un elemento <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento <li>
    const li = document.createElement("li");

    // Asignar el texto del amigo al contenido del <li>
    li.textContent = amigos[i];

    // Agregar el <li> a la lista en el DOM
    listaAmigos.appendChild(li);
  }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `¡El amigo secreto es: <strong class="nombre-amigo">${amigoSorteado}</strong>!`;
}

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio-futurama");
  const botonFuturama = document.querySelector(".audio-futurama");

  // Alternar reproducción y pausa
  botonFuturama.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      botonFuturama.textContent = "Pausar Música";
    } else {
      audio.pause();
      botonFuturama.textContent = "Reproducir Música";
    }
  });
});
