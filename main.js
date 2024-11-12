import { recetasNoVegetarianas, recetasVegetarianas } from "./database.js";

function CrearCardReceta() {
  // Aseguramos de pasar el parámetro `element` al `map()`
  recetasVegetarianas.map((element) => { // Aquí se recibe el parámetro `element`
    let nombre = document.createElement('h3');
    let descripcion = document.createElement('p');
    let dificultad = document.createElement('p');
    let tiempoPreparacion = document.createElement('p');
    let tipo = document.createElement('p');
    let ingredientes = document.createElement('p');
    let listadoIngredientes = document.createElement('ul');
    let ingrediente = document.createElement('li');
    let pasos = document.createElement('p');
    let listadoPasos = document.createElement('ol');
    let paso = document.createElement('li');
    let card = document.createElement('div');

    // Ahora se puede acceder a las propiedades de `element`
    nombre.textContent = element.nombre;
    descripcion.textContent = element.descripcion; // Asegúrate de que `element.descripcion` existe
    dificultad.textContent = element.dificultad;
    tiempoPreparacion.textContent = element.tiempoPreparacion; // Asegúrate de que existe
    tipo.textContent = element.tipo; // Asegúrate de que existe

    // Si tienes pasos e ingredientes, puedes agregarlos aquí. Lo hago de forma repetitiva como ejemplo:
    listadoPasos.append(paso, paso, paso);
    listadoIngredientes.append(ingrediente, ingrediente, ingrediente);

    // Append los elementos al `card`
    card.append(nombre, descripcion, dificultad, tiempoPreparacion, tipo, ingredientes, pasos, listadoPasos);

    // Aquí ya se puede imprimir el card
    console.log(card);
  });
}

function agregarReceta() {
  // Aquí puedes agregar la lógica de agregar receta si es necesario.
}

document.getElementById('btnVegetarianas').addEventListener('click', mostrarRecetasVegetarianas);

function mostrarRecetasVegetarianas() {
  document.getElementById('recetas-vegetarianas').style.display = 'flex';
  document.getElementById('recetas-no-vegetarianas').style.display = 'none';
  CrearCardReceta();
  console.log(recetasVegetarianas);
}

document.getElementById('btnNoVegetarianas').addEventListener('click', mostrarRecetasNoVegetarianas);

function mostrarRecetasNoVegetarianas() {
  document.getElementById('recetas-vegetarianas').style.display = 'none';
  document.getElementById('recetas-no-vegetarianas').style.display = 'flex';
  console.log(recetasNoVegetarianas);
}

document.getElementById('cerrarSesion').addEventListener('click', CerrarSesion);

function CerrarSesion() {
  window.location.href = 'index.html';
}
