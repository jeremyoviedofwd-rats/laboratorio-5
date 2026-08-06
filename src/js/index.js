const criaturas = [
  {
    nombre: "Creeper",
    descripcion: "Explota cuando se acerca al jugador",
  },

  {
    nombre: "Zombie",
    descripcion: "Aparece durante la noche",
  },

  {
    nombre: "Enderman",
    descripcion: "Puede teletransportarse",
  },
];

const contenedor = document.getElementById("lista-criaturas");

criaturas.forEach(function (criatura) {
  const tarjeta = document.createElement("div");

  tarjeta.classList.add("criatura");

  tarjeta.innerHTML = `

<h3>${criatura.nombre}</h3>

<p>${criatura.descripcion}</p>

`;

  contenedor.appendChild(tarjeta);
});
const bloques = [
  {
    nombre: "Diamante",
    nivel: "Raro",
  },

  {
    nombre: "Madera",
    nivel: "Común",
  },

  {
    nombre: "Piedra",
    nivel: "Común",
  },

  {
    nombre: "Obsidiana",
    nivel: "Difícil de romper",
  },
];

const contenedorBloques = document.getElementById("lista-bloques");

bloques.forEach(function (bloque) {
  const tarjeta = document.createElement("div");

  tarjeta.classList.add("bloque");

  tarjeta.innerHTML = `

<h3>${bloque.nombre}</h3>

<p>${bloque.nivel}</p>

`;

  contenedorBloques.appendChild(tarjeta);
});
const botonEntrada = document.getElementById("entrar");

botonEntrada.addEventListener("click", function () {
  alert("🌎 Bienvenido al mundo Minecraft");
});
let bloquesJugador = 0;

const limiteInventario = 64;

const contador = document.getElementById("contador");

const botonRecolectar = document.getElementById("recolectar");

botonRecolectar.addEventListener("click", function () {
  if (bloquesJugador >= limiteInventario) {
    alert("⚠️ Inventario lleno");

    return;
  }

  bloquesJugador++;

  contador.textContent = bloquesJugador;
});
let nivelJugador = 1;

const nivel = document.getElementById("nivel");

const botonNivel = document.getElementById("subir-nivel");

botonNivel.addEventListener("click", function () {
  nivelJugador++;

  nivel.textContent = nivelJugador;
});
let experiencia = 0;

const barraExp = document.getElementById("barra-exp");

botonNivel.addEventListener("click", function () {
  experiencia += 10;

  if (experiencia > 100) {
    experiencia = 100;
  }

  barraExp.style.width = experiencia + "%";
});
const selectorBioma = document.getElementById("bioma");

const mensajeBioma = document.getElementById("mensaje-bioma");

selectorBioma.addEventListener("change", function () {
  mensajeBioma.textContent = "Has viajado al bioma: " + selectorBioma.value;
});
