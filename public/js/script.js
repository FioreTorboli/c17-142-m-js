

/////////////////////////////////////////////////BUSCADOR - LANDING//////////////////////////////////////////////////////////////
const inputCarrera = document.querySelector(".search-input");
const inputUniversidad = document.querySelector(".search-category");

const tablaCarreras = document.querySelector(".carreras");
const celdasCarreras = tablaCarreras.getElementsByTagName("td"); 

const tablaUniversidades = document.querySelector(".universidades"); 
const celdasUniversidades = tablaUniversidades.getElementsByTagName("td"); 


// CARRERAS 
let uni = `js/data.json`;

fetch(uni)
  .then(response => response.json())
  .then(json => mostrarCarreras(json))

  .catch(error => console.log(error));

  function mostrarCarreras(data) {
    let body = "";
    data.carreras.forEach(carrera => {
      body += `<tr><td class="ocultar"><a href="#">${carrera.nombre}</a></td></tr>`;
      document.querySelector(".carreras").innerHTML = body;
    });
  
    const carrerasClick = document.querySelectorAll(".carreras a");
    carrerasClick.forEach(click => {
      click.addEventListener('click', (event) => {
        event.preventDefault();
        const carreraSeleccionada = event.target.innerText;
        inputCarrera.value = carreraSeleccionada;

        carrerasClick.forEach(otherClick => {
          if (otherClick !== click) {
            otherClick.parentElement.classList.add("ocultar");
            click.parentElement.classList.add("ocultar");
          }
        });
        


      });
    });
  }

inputCarrera.addEventListener('keyup', (event) => {

  
  let ingresarTexto = event.target.value;

  let expresionRegular = new RegExp(ingresarTexto, "i")
  for (let i=0; i<celdasCarreras.length; i++) {
    let valor = celdasCarreras[i];

    if (expresionRegular.test(valor.innerText) && (ingresarTexto!="")) {
      valor.classList.remove("ocultar")
    } else {
      valor.classList.add("ocultar");
    }
  }

})


// UNIVERSIDADES


  fetch(uni)
  .then(response => response.json())
  .then(json => mostrarUniversidades(json))
  .catch(error => console.log(error));  

  

function mostrarUniversidades(datos) {  
  let body = "";
  datos.universidades.forEach(universidad => {
    body+=`<tr><td class="ocultar"><a href="#">${universidad.nombre}</a> </td></tr>`;
    document.querySelector(".universidades").innerHTML = body;
    })

    const universidadesClick = document.querySelectorAll(".universidades a");
    universidadesClick.forEach(click => {
      click.addEventListener('click', (event) => {
        event.preventDefault();
        const universidadSeleccionada = event.target.innerText;
        inputUniversidad.value = universidadSeleccionada;


        universidadesClick.forEach(otherClick => {
          if (otherClick !== click) {
            otherClick.parentElement.classList.add("ocultar");
            click.parentElement.classList.add("ocultar");
          }
        });
  });
});




};


inputUniversidad.addEventListener('keyup', (event) => {
  
  let ingresarTexto = event.target.value;

  let expresionRegular = new RegExp(ingresarTexto, "i")
  for (let i=0; i<celdasUniversidades.length; i++) {
    let valor = celdasUniversidades[i];

    if (expresionRegular.test(valor.innerText) && (ingresarTexto!="")) {
      valor.classList.remove("ocultar")
    } else {
      valor.classList.add("ocultar");
    }
  }

})


