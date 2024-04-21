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

let buscacarrera = `js/data.json`;

fetch(buscacarrera)

.then(response => response.json())
.then(json => recuperarCarrera(json))
.catch(error => console.log(error));


let carreraAmostrar = null;
window.onload = recuperarCarrera();

function recuperarCarrera(data) {
    carreraAmostrar = sessionStorage.getItem("carrera");


    for (let i = 0; i < data.carreras.length; i++) {
        if (carreraAmostrar === data.carreras[i].nombre) {

            const titulo = document.querySelector(".design5");

            // CARRERA UNO

            const carreraUno = document.querySelectorAll('.title-card')[0];

            const universidadUno = document.querySelector(".p-card");
            const duracionCarreraUno = document.querySelector(".item-modality p");
            const materiasUno = document.querySelectorAll(".item-modality p")[1];
            const tipoUno = document.querySelectorAll(".item-modality p")[2];
            const modalidadUno = document.querySelectorAll(".item-modality p")[3];

            titulo.innerHTML = `Encontramos éstas Carreras de [${data.carreras[i].nombre}]`;
            carreraUno.innerHTML = `${data.carreras[i].carrerauno}`;
            universidadUno.innerHTML = `${data.carreras[i].universidaduno}`;
            duracionCarreraUno.innerHTML = `${data.carreras[i].duracionuno}`;
            materiasUno.innerHTML = `${data.carreras[i].materiasuno}`;
            tipoUno.innerHTML = `${data.carreras[i].tipouno}`;
            modalidadUno.innerHTML = `${data.carreras[i].modalidaduno}`;

            // CARRERA DOS

            const carreraDos = document.querySelectorAll('.title-card')[1];

            const universidadDos = document.querySelectorAll(".p-card")[1];
            const duracionCarreraDos = document.querySelectorAll(".item-modality p")[4];
            const materiasDos = document.querySelectorAll(".item-modality p")[5];
            const tipoDos = document.querySelectorAll(".item-modality p")[6];
            const modalidadDos = document.querySelectorAll(".item-modality p")[7];

            carreraDos.innerHTML = `${data.carreras[i].carrerados}`;

            universidadDos.innerHTML = `${data.carreras[i].universidaddos}`;
            duracionCarreraDos.innerHTML = `${data.carreras[i].duraciondos}`;
            materiasDos.innerHTML = `${data.carreras[i].materiasdos}`;
            tipoDos.innerHTML = `${data.carreras[i].tipodos}`;
            modalidadDos.innerHTML = `${data.carreras[i].modalidaddos}`;

            // CARRERA TRES

            const carreraTres = document.querySelectorAll('.title-card')[2];

            const universidadTres = document.querySelectorAll(".p-card")[2];
            const duracionCarreraTres = document.querySelectorAll(".item-modality p")[8];
            const materiasTres = document.querySelectorAll(".item-modality p")[9];
            const tipoTres = document.querySelectorAll(".item-modality p")[10];
            const modalidadTres = document.querySelectorAll(".item-modality p")[11];


            carreraTres.innerHTML = `${data.carreras[i].carreratres}`;

            universidadTres.innerHTML = `${data.carreras[i].universidadtres}`;
            duracionCarreraTres.innerHTML = `${data.carreras[i].duraciontres}`;
            materiasTres.innerHTML = `${data.carreras[i].materiastres}`;
            tipoTres.innerHTML = `${data.carreras[i].tipotres}`;
            modalidadTres.innerHTML = `${data.carreras[i].modalidadtres}`;

            // CARRERA CUATRO

            const carreraCuatro = document.querySelectorAll('.title-card')[3];


            const universidadCuatro = document.querySelectorAll(".p-card")[3];
            const duracionCarreraCuatro = document.querySelectorAll(".item-modality p")[12];
            const materiasCuatro = document.querySelectorAll(".item-modality p")[13];
            const tipoCuatro = document.querySelectorAll(".item-modality p")[14];
            const modalidadCuatro = document.querySelectorAll(".item-modality p")[15];


            carreraCuatro.innerHTML = `${data.carreras[i].carreracuatro}`;

            universidadCuatro.innerHTML = `${data.carreras[i].universidadcuatro}`;
            duracionCarreraCuatro.innerHTML = `${data.carreras[i].duracioncuatro}`;
            materiasCuatro.innerHTML = `${data.carreras[i].materiascuatro}`;
            tipoCuatro.innerHTML = `${data.carreras[i].tipocuatro}`;
            modalidadCuatro.innerHTML = `${data.carreras[i].modalidadcuatro}`;

            // CARRERA CINCO

            const carreraCinco = document.querySelectorAll('.title-card')[4];
            
            const universidadCinco = document.querySelectorAll(".p-card")[4];
            const duracionCarreraCinco = document.querySelectorAll(".item-modality p")[16];
            const materiasCinco = document.querySelectorAll(".item-modality p")[17];
            const tipoCinco = document.querySelectorAll(".item-modality p")[18];
            const modalidadCinco = document.querySelectorAll(".item-modality p")[19];


            carreraCinco.innerHTML = `${data.carreras[i].carreracinco}`;

            universidadCinco.innerHTML = `${data.carreras[i].universidadcinco}`;
            duracionCarreraCinco.innerHTML = `${data.carreras[i].duracioncinco}`;
            materiasCinco.innerHTML = `${data.carreras[i].materiascinco}`;
            tipoCinco.innerHTML = `${data.carreras[i].tipocinco}`;
            modalidadCinco.innerHTML = `${data.carreras[i].modalidadcinco}`;
        


            carreraCuatro.innerHTML = `${data.carreras[i].carreracuatro}`;
            carreraCinco.innerHTML = `${data.carreras[i].carreracinco}`;
            
            
            break;
        }
    }
}

