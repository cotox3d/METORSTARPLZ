document.getElementById('encuestaForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    console.log('Datos del formulario:', formValues);

    alert('Formulario enviado correctamente');
});