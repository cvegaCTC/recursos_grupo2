const firebaseConfig = {
	apiKey: "AIzaSyC8ZLnNm6F478gfEGVtf01LakHdFkO7JK0",
	authDomain: "e-commerce-f6bfc.firebaseapp.com",
	projectId: "e-commerce-f6bfc",
	storageBucket: "e-commerce-f6bfc.appspot.com",
	messagingSenderId: "170116459309",
	appId: "1:170116459309:web:bcd7e3cb7f5d635f3741a4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize firebase
var db = firebase.firestore();

var path = window.location.pathname;
var page = path.split("/").pop();
page = page.replace(".html", "");
console.log(page);

if (page === "admin-productos") {
	document.getElementById("btn-guardar").addEventListener("click", function (e) {
		e.preventDefault();
		guardarProducto();
	});
} else if (page === "login") {
	document.getElementById("btn-login").addEventListener("click", function (e) {
		e.preventDefault();
		inicioSesion();
	});
	document.getElementById("btn-signup").addEventListener("click", function (e) {
		e.preventDefault();
		registro();
	})
}


function guardarProducto() {
	let nombre = document.getElementById("nombre").value;
	let descripcion = document.getElementById("descripcion").value;
	let precio = parseInt(document.getElementById("precio").value);
	let stock = parseInt(document.getElementById("stock").value);

	db.collection("productos").add({
		nombre: nombre,
		descripcion: descripcion,
		precio: precio,
		stock: stock
	})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
}

function inicioSesion() {
	let user = null;
	let username = document.getElementById("username_login").value;
	let password = document.getElementById("pass_login").value;
	db.collection("usuarios").where("username", "==", username).get()
		.then((docs) => {
			docs.forEach((doc) => {
				user = doc.data();
			})
			firebase.auth().signInWithEmailAndPassword(user.email, password)
				.then((userCredential) => {
					alert("Bienvenide, " + user.nombre);
				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});

		}).catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
}

function registro() {
	let nombre = document.getElementById("name").value;
	let username = document.getElementById("username_signup").value;
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass_signup").value;

	firebase.auth().createUserWithEmailAndPassword(email, pass)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			db.collection("usuarios").add({
				nombre: nombre,
				username: username,
				email: email,
				id_auth: user.uid,
				rol: "USER"
			})
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
}