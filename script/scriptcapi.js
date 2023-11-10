document.getElementById("sumarBoton").addEventListener("click", function () {
    var selectElements = document.querySelectorAll("select[id^='seleccionelarespuesta']");
    var suma = 0;
    var respuestasIncorrectas = [];

    selectElements.forEach(function (select, index) {
        var selectedOption = select.options[select.selectedIndex];
        if (selectedOption) {
            suma += parseInt(selectedOption.value);

            if (parseInt(selectedOption.value) === 0) {
                respuestasIncorrectas.push("Pregunta " + (index + 1));
                document.getElementById("icono" + (index + 1)).textContent = "❌"; // Mostrar tache (❌) en etiqueta incorrecta
            } else {
                document.getElementById("icono" + (index + 1)).textContent = "✅"; // Mostrar paloma (✅) en etiqueta correcta
            }
        }
    });

    var resultadoMensaje = "Tus aciertos son: " + suma + '/10';

    if (suma >= 7) {
        resultadoMensaje += " - ¡Impresionante!";
    } else {
        resultadoMensaje += " - Buen intento, pero cometiste errores en las siguientes preguntas: " + respuestasIncorrectas.join(", ");
    }

    document.getElementById("resultado").textContent = resultadoMensaje;

    selectElements.forEach(function (select) {
        select.disabled = true;
    });
});
