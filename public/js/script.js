// PARA LA SECCION "CARRERAS MÁS BUSCADAS" DE LA PÁGINA PRINCIPAL.

// OBTENCIÓN DE DATOS DEL ARCHIVO LOCAL PSEUDO BBDD.

let dataLocal = null;

fetch('js/carreras.json')
  .then(response => response.json())
  .then(data => guardarData(data))
  .catch(error => console.log(error));

//Toda la info de las carreras (en el json) ahora en el objeto data.
function guardarData(data) {
  dataLocal = data;
}

// IDENTIFICACIÓN DEL SECTOR DE LA PÁGINA QUE CONTIENE LAS CARRERAS.
const carrerasActuales = document.querySelector(".carreras-list");

// AL CLIQUEAR SOBRE UNA RAMA DE ESTUDIO, SE CAMBIAN ESTILOS Y MUESTRAN LAS CARRERAS CORRESPONDIENTES.

// ADMINISTRACIÓN.
const linkAdm = document.querySelector("#administracion");
linkAdm.addEventListener("click", (event) => {
  ajustarEstilosBotones(linkAdm);
  mostrarCarrerasSegunClave(dataLocal, "administra"); //Mandamos la fuente de datos y la palabra clave.
});

// PROGRAMACION
const linkProg = document.querySelector("#programacion");
linkProg.addEventListener("click", (event) => {
  ajustarEstilosBotones(linkProg);
  mostrarCarrerasSegunClave(dataLocal, "unsl"); //Mandamos la fuente de datos y la palabra clave.
  //MEJORAR LA CLAVE ACA!!!!!!!!!!!!!!!!!!
});

// CONTABILIDAD
const linkConta = document.querySelector("#contabilidad");
linkConta.addEventListener("click", (event) => {
  ajustarEstilosBotones(linkConta);
  mostrarCarrerasSegunClave(dataLocal, "conta"); //Mandamos la fuente de datos y la palabra clave.
});

// DERECHO
const linkDer = document.querySelector("#derecho");
linkDer.addEventListener("click", (event) => {
  ajustarEstilosBotones(linkDer);
  mostrarCarrerasSegunClave(dataLocal, "aboga"); //Mandamos la fuente de datos y la palabra clave.
});

//Pone estilos de ACTIVO a elementoBuscado y de INACTIVO a sus hermanos.
function ajustarEstilosBotones(elementoBuscado) {
  const hermanos = document.querySelectorAll(".carreras-filter-group > .carreras-filter-item");
  hermanos.forEach(hermano => {
    if (hermano !== elementoBuscado){
      hermano.classList.add("carreras-filter-item--inactive");
    }
    else {
      //IMPORTANTE remover estilo previo antes de agregar nuevo, sino no funciona.
      elementoBuscado.classList.remove("carreras-filter-item--inactive");
      elementoBuscado.classList.add("carreras-filter-item--active");
    }
  });
}

// FUNCIÓN QUE MUESTRA LAS CARRERAS QUE COINCIDAN CON LA PALABRA CLAVE.
function mostrarCarrerasSegunClave(carreras, carreraBuscada) {
  let arregloCarreras = []; //Arreglo que contendrá solo las carreras de mi interés.
  carreras.forEach(carrera => {
    if (carrera.nombre.toLowerCase().includes(carreraBuscada)) {
      arregloCarreras.push( Object.values(carrera) ); //Al guardar cada carrera se guarda como un array.
    }
  });
  //En este punto arregloCarreras es un arreglo de arreglos, donde cada arreglo interno es una carrera de una rama específica que coincide con el criterio carreraBuscada (administración, derecho, etc.).

  carrerasActuales.innerHTML = ""; //Limpio el contenedor de carreras.

  //Muestro los 4 primeros elementos del arregloAdmin, si los hay.
  let i = 0;
  while (i < arregloCarreras.length && i < 4) {
    carrerasActuales.innerHTML += `
    <div class="carrera-card">
      <img src="img/${arregloCarreras[i][0]}" alt="${arregloCarreras[i][1]}" class="carrera-card-image"
        loading="lazy" />
      <div class="carrera-card-content">
        <h3 class="carrera-card-title">${arregloCarreras[i][1]}</h3>
        <div class="carrera-card-details">
          <div class="carrera-card-detail">
            <img src="img/agenda.png" alt="" class="carrera-card-detail-icon" loading="lazy" />
            <span class="carrera-card-detail-text">${arregloCarreras[i][2]} Materias</span>
          </div>
          <div class="carrera-card-detail">
            <img src="img/reloj.png" alt="" class="carrera-card-detail-icon" loading="lazy" />
            <span class="carrera-card-detail-text">${arregloCarreras[i][3]} Semanas</span>
          </div>
        </div>
        <div class="carrera-card-footer">
          <span class="carrera-card-price">A partir de: ${arregloCarreras[i][4]}</span>
          <div class="carrera-card-rating">
            <img src="img/estrella.png" alt="" class="carrera-card-rating-icon" loading="lazy" />
            <span class="carrera-card-rating-text">${arregloCarreras[i][5]}</span>
          </div>
        </div>
      </div>
    </div>`;
    i++;
  }
}

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
    <li><a href="uniCuyo">Sobre Nosotros</a></li>
    <li><a href="detalle_carrera.html">Buscar Uni</a></li>
    <li><a href="#">Comparador</a></li>
    <li><a href="test-vocacional.html">Test Vocacional</a></li>
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

// LLAMADO AL BOTÓN BUSCAR 
const btnBuscar = document.querySelector(".search-button");




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


const seleccionarCarrera = data.carreras.find(c => c.nombre === carreraSeleccionada);


if (seleccionarCarrera) {

  console.log(`Seleccionaste: ${seleccionarCarrera.nombre}`);

  btnBuscar.addEventListener('click', () => {
      // ACA DEBERIAMOS LLEVAR AL USUARIO A LA PAGINA CORRESPONDIENTE 
    window.location.href = "buscacarrera.html";

  });

} else {
  console.error("Carrera no encontrada");
}

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

  

function mostrarUniversidades(data) {  
  let body = "";
  data.universidades.forEach(universidad => {
    body+=`<tr><td class="ocultar"><a href="#">${universidad.nombre}</a> </td></tr>`;
    document.querySelector(".universidades").innerHTML = body;
    })

    const universidadesClick = document.querySelectorAll(".universidades a");
    universidadesClick.forEach(click => {
      click.addEventListener('click', (event) => {
        event.preventDefault();
        const universidadSeleccionada = event.target.innerText;
        inputUniversidad.value = universidadSeleccionada;


        const seleccionarUniversidad = data.universidades.find(u => u.nombre === universidadSeleccionada);

        if (seleccionarUniversidad) {

          console.log(`Seleccionaste: ${seleccionarUniversidad.nombre}`);

          btnBuscar.addEventListener('click', () => {
              // ACA DEBERIAMOS LLEVAR AL USUARIO A LA PAGINA CORRESPONDIENTE 
            window.location.href = "buscacarrera.html";
            
          });

        } else {
          console.error("Carrera no encontrada");
        }

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


