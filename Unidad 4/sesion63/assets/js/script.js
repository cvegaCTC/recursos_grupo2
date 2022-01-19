const firebaseConfig = {
    apiKey: "AIzaSyDQbjPEkpoftgIkflmYkT-y0RdtCDvcZik",
    authDomain: "test-firebase-abeb7.firebaseapp.com",
    projectId: "test-firebase-abeb7",
    storageBucket: "test-firebase-abeb7.appspot.com",
    messagingSenderId: "224644345237",
    appId: "1:224644345237:web:323b079f96a4d975c5da9c",
    measurementId: "G-1MP43Y09HF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Registro de usuarios
// Si no está registrado:
document.getElementById("btnRegistro").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login").style.display = "none";
    document.getElementById("contenidoWeb").style.display = "none";
    document.getElementById("registro-contenido").style.display = "block";
    document.getElementById("registroUsuario").style.display = "block";
});

// Registro con email y contraseña
document.getElementById("btnRegistroConMail").addEventListener("click", function (e) {
    e.preventDefault();

    // Captura de datos
    var email = document.getElementById("registroEmail").value;
    var password = document.getElementById("registroPassword").value;

    // Creación usuario en Firebase con email y contraseña
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // ocultamos formulario de registro
            document.getElementById("registroUsuario").style.display = "none";

            // limpiar formulario de registro
            document.getElementById("registroUsuario").reset();
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
})

// Registro/Ingreso con Google
document.getElementById("btnIngresoGmail").addEventListener("click", function (e) {
    e.preventDefault();

    auth.signInWithPopup(provider)
        .then((result) => {
            /*
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...*/
            console.log("Ingreso exitoso con Google");
            verificarSesion();
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            /*// The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...*/
            console.log(errorCode, errorMessage, email);
        });
})

// Ingreso con usuario y contraseña
document.getElementById("btnIngresoMail").addEventListener("click", function () {
    document.getElementById("ingresoMail").style.display = "block";
    document.getElementById("btnIngresoMail").style.display = "none";
    document.getElementById("btnIngresoGmail").style.display = "none";
})

document.getElementById("btnIngresoConMail").addEventListener("click", function () {
    var email = document.getElementById("ingresoEmail").value;
    var password = document.getElementById("ingresoPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Sesión iniciada");
            verificarSesion();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
})

// Logout
document.getElementById("logout").addEventListener("click", function (e) {
    e.preventDefault();
    auth.signOut().then(() => {
        verificarSesion();
        console.log("Log out exitoso");
    }).catch((error) => {
        verificarSesion();
        console.log(error);
    })
})

// Verificar sesión activa
function verificarSesion() {
    console.log("Verificando sesión activa...");
    auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
            /*
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            */
            document.getElementById("login").style.display = "none";
            document.getElementById("registroUsuario").style.display = "none";
            document.getElementById("contenidoWeb").style.display = "block";
            obtienePaises();
        } else {
            // User is signed out
            // ...
            document.getElementById("registro-contenido").style.display = "none";
            document.getElementById("ingresoMail").style.display = "none";
            document.getElementById("btnIngresoMail").style.display = "block";
            document.getElementById("contenidoWeb").style.display = "none";
            document.getElementById("login").style.display = "block";
        }
    });
}

// Inicialización de base de datos
// cada colección corresponde a una tabla
// cada documento corresponde a un dato o entrada
const db = firebase.firestore();

/*
ESTO SE EJECUTA SOLO UNA VEZ
try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
 
ESTO SE PUEDE EJECUTAR LAS VECES QUE QUIERAN
// Mostrar documentos de la colección
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
*/

// Países
obtienePaises();
document.getElementById("btnAddCountry").addEventListener("click", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nameCountry").value;
    var capital = document.getElementById("capitalCountry").value;
    var poblacion = document.getElementById("populationCountry").value;
    var idioma = document.getElementById("languageCountry").value;

    if (nombre.length > 0 && capital.length > 0 && poblacion.length > 0 && idioma.length > 0) {
        try {
            const docRef = addDoc(collection(db, "paises"), {
                nombre: nombre,
                capital: capital,
                poblacion: poblacion,
                idioma: idioma
            });
            // console.log("Document written with ID: ", docRef.id);
            document.getElementById("registroPaises").reset();
            obtienePaises();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else {
        alert("Todos los campos son obligatorios.");
    }
})

function setupPaises(data) {
    document.getElementById("dataPaises").innerHTML = "";
    if (data.size > 0) {
        let html = "";
        data.forEach(doc => {
            const country = doc.data();
            const tr = `<tr><td>${country.nombre}</td><td>${country.capital}</td><td>${country.poblacion}</td><td>${country.idioma}</td></tr>`;
            html += tr;
        });
        document.getElementById("dataPaises").innerHTML = html;
    } else {
        let html = "";
        let tr = "<tr><td class='text-center' colspan='4'>No existen datos.</td></tr>";
        html += tr;
        document.getElementById("dataPaises").innerHTML = html;
    }
}

function obtienePaises() {
    verificarSesion();
    db.collection("paises").get().then((data) => {
        setupPaises(data);
    });
}