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
