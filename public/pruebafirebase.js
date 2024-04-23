
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNVtSYhjhv7mnLoDO-yzJegYYORgEHj4s",
    authDomain: "buscouni-dedc9.firebaseapp.com",
    databaseURL: "https://buscouni-dedc9-default-rtdb.firebaseio.com",
    projectId: "buscouni-dedc9",
    storageBucket: "buscouni-dedc9.appspot.com",
    messagingSenderId: "622346398309",
    appId: "1:622346398309:web:54d105a13193637cb6748c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const texto = document.querySelector(".submit");

texto.addEventListener('click', function(event) {
  event.preventDefault();

  set(ref(db, 'carreras/' + document.querySelector(".usuario").value), {
    nombreDeUsuario: document.querySelector(".usuario").value,
    email: document.querySelector(".email").value,
  });
});

// Traer datos desde la base de datos
function traerDatos() {
  const usuario = document.querySelector(".usuario").value;
  const usuarioRef = ref(db, 'carreras/' + usuario);

  get(usuarioRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
      // Haz algo con los datos recuperados, por ejemplo, mostrarlos en la página
      document.querySelector(".usuario").textContent = data.nombreDeUsuario;
      document.querySelector(".email").textContent = data.email;
    } else {
      console.log("No existen datos para el usuario: " + usuario);
    }
  }).catch((error) => {
    console.error("Error al traer datos:", error);
  });
}

// Llama a la función para traer datos cuando la página se cargue
window.onload = traerDatos;