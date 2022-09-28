window.addEventListener("load", function() {
    formulario = this.document.getElementById("formulario");
    formulario.addEventListener("submit", function() {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("pwd").value;

        //alert("El nombre es " + nombre + " con contraseña " + pass);

        let respuesta = document.getElementById("result");

        if (nombre == "carlos" && pass == "123") {
            respuesta.innerText = "Se acerto el ingreso a el sistema"
            respuesta.style.color = "green"
            respuesta.style.fontSize = "4em"
            respuesta.style.fontFamily = "impact"
            respuesta.style.width = "500px"
            respuesta.style.height = "250px"
            respuesta.style.backgroundColor = "lime"
        } else {
            respuesta.innerText = "Error al ingresar"
            respuesta.style.color = "red"
            respuesta.style.fontSize = "4em"
            respuesta.style.fontFamily = "calibri"
            respuesta.style.width = "500px"
            respuesta.style.height = "150px"
            respuesta.style.backgroundColor = "yellow"
        }
    });
});