

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const inputCarrera = document.querySelector(".search-input");
const inputUniversidad = document.querySelector(".search-category");

const tablaCarreras = document.querySelector(".carreras");
const celdasCarreras = tablaCarreras.getElementsByTagName("td"); 

const tablaUniversidades = document.querySelector(".universidades"); 
const celdasUniversidades = tablaUniversidades.getElementsByTagName("td"); 



// CARRERAS 
let uri = `js/data.json`;

fetch(uri)
  .then(response => response.json())
  .then(json => mostrarCarreras(json))

  .catch(error => console.log(error));

function mostrarCarreras(data) {  
  let body = "";
  data.carreras.forEach(carrera => {
    body+=`<tr><td class="ocultar">${carrera.nombre}</td></tr>`;
    document.querySelector(".carreras").innerHTML = body;
    }
)};

inputCarrera.addEventListener('keyup', (event) => {
  let ingresarTexto = event.target.value;

  let expresionRegular = new RegExp(ingresarTexto, "i")
  for (let i=0; i<celdasCarreras.length; i++) {
    let valor = celdasCarreras[i];

    if (expresionRegular.test(valor.innerText) && (ingresarTexto!="")) {
      valor.classList.remove("ocultar")
    } else {
      console.log(valor);
      valor.classList.add("ocultar");
    }
  }

})


// UNIVERSIDADES

 let uni = `js/data.json`;

  fetch(uni)
  .then(response => response.json())
  .then(json => mostrarUniversidades(json))
  .catch(error => console.log(error));  

  

function mostrarUniversidades(datos) {  
  let body = "";
  datos.universidades.forEach(universidad => {
    body+=`<tr><td class="ocultar">${universidad.nombre}</td></tr>`;
    document.querySelector(".universidades").innerHTML = body;
    }
)};


inputUniversidad.addEventListener('keyup', (event) => {
  
  let ingresarTexto = event.target.value;

  let expresionRegular = new RegExp(ingresarTexto, "i")
  for (let i=0; i<celdasUniversidades.length; i++) {
    let valor = celdasUniversidades[i];

    if (expresionRegular.test(valor.innerText) && (ingresarTexto!="")) {
      valor.classList.remove("ocultar")
    } else {
      console.log(valor);
      valor.classList.add("ocultar");
    }
  }

})

