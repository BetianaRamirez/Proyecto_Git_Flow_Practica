// JavaScript básico para la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación cargada correctamente');
    
    // Funcionalidad del botón de saludo
    const botonSaludar = document.getElementById('saludar');
    
    if (botonSaludar) {
        botonSaludar.addEventListener('click', function() {
            alert('¡Hola! Esta es mi aplicación para practicar Git Flow');
        });
    }
    
    // Navegación suave
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mostrar fecha actual
    const fecha = new Date().toLocaleDateString('es-ES');
    console.log(`Aplicación iniciada el: ${fecha}`);
});
