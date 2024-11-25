function showSection(sectionId) {

    // Ocultar todas las secciones

    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {

        section.style.display = 'none';

    });


    // Mostrar la sección seleccionada

    const selectedSection = document.getElementById(sectionId);

    selectedSection.style.display = 'grid';

}