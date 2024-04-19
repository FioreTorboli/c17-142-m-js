// PRIMER VERSIÓN

/* let carreraAmostrar = null;
window.onload = recuperarCarrera();

//recupera lo guardado por index.html
function recuperarCarrera() {
    carreraAmostrar = sessionStorage.getItem("carrera");
}

//El nuevo section.
let seccionCarreras = document.querySelector(".provisoria");

seccionCarreras.innerHTML = `
    <p>La carrera elegida en el buscador es ${carreraAmostrar} papáaa</p>
`; */

// SEGUNDA VERSIÓN

let carreraAmostrar = null;
window.onload = recuperarCarrera();

function recuperarCarrera() {
    carreraAmostrar = sessionStorage.getItem("carrera");
    

    const tituloh1 = document.querySelector(".design5");

    tituloh1.innerHTML = `
        <p>Carreras de ${carreraAmostrar}</p>
    `;
}
