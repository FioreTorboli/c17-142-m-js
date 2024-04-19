let carreraAmostrar = null;
window.onload = recuperarCarrera();

//recupera lo guardado por index.html
function recuperarCarrera() {
    carreraAmostrar = sessionStorage.getItem("carrera");
}

//El nuevo section.
let seccionCarreras = document.querySelector(".provisoria");

seccionCarreras.innerHTML = `
    <p>La carrera elegida en el buscador es ${carreraAmostrar} papáaa</p>
`;