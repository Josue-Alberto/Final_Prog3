let personas = [];

// Obtener los elementos del DOM
const formulario = $('form');
const tablaPersonas = $('#tabla-personas');

// Función para agregar una persona a la tabla
function agregarPersona(personas) {
    personas.push(personas);
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let edad = document.getElementById("edad").value;
	let telefono = document.getElementById("telefono").value;
	let email = document.getElementById("email").value;

	// Validar que todos los campos estén llenos
	if (nombre && apellido && edad && telefono && email) {
		// Crear un objeto persona
		let persona = {
			nombre: nombre,
			apellido: apellido,
			edad: edad,
			telefono: telefono,
			email: email
		};

		// Agregar el objeto persona al arreglo
		personas.push(persona);

		// Limpiar los campos de entrada
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("edad").value = "";
		document.getElementById("telefono").value = "";
		document.getElementById("email").value = "";

		// Actualizar la tabla
		actualizarTabla();
	} else {
		alert("Por favor, llena todos los campos.");
	}
}

// Función para actualizar la tabla con los datos de las personas
function actualizarTabla() {
	let tabla = document.getElementById("tabla");

	// Borrar todas las filas existentes en la tabla
	while (tabla.rows.length > 1) {
		tabla.deleteRow(1);
	}
}
