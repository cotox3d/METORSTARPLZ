document.getElementById('encuestaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Recoger los datos del formulario
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    // Mostrar los datos en la consola (aquí podrías enviar los datos a un servidor)
    console.log('Datos del formulario:', formValues);

    // Mostrar un mensaje de éxito
    alert('Formulario enviado correctamente');
});