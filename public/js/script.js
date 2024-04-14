/* Esto agrega bootstrap (usado cuando menos para obtener los íconos de las redes sociales) en todas las páginas. */

const head = document.querySelector("head");
head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">';

/* HEADER y FOOTER reutilizables por todas las páginas. */

const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="site-name">
  <img src="img/logogenerico.png" alt="Logo" class="logo" />
  <h1 class="site-title">BUSCO UNI</h1>
</div>
<nav class="nav-container">
  <ul class="nav-list">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Sobre Nosotros</a></li>
    <li><a href="detalle_carrera.html">Buscar Uni</a></li>
    <li><a href="#">Comparador</a></li>
    <li><a href="#">Test Vocacional</a></li>
  </ul>
</nav>
`;

footer.innerHTML = `
<h2 class="footer-title">Busco UNI</h2>
<address class="footer-address">
  Calle Falsa 123, San Luis, Argentina.
</address>
<nav class="footer-links">
  Políticas de Privacidad | Términos y Condiciones
</nav>
<div class="social-buttons">
  <ul class="social-buttons-list">
    <li>
      <a class="facebook" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="bi bi-facebook"></i>
      </a>
    </li>
    <li>
      <a class="twitter-x" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="bi bi-twitter-x"></i>
      </a>
    </li>
    <li>
      <a class="instagram" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="bi bi-instagram"></i>
      </a>
    </li>
  </ul>
</div>
`;

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


