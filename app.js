// Archivo principal de la aplicación
class App {
    constructor() {
        this.usuarios = [];
    }

    inicializar() {
        console.log("Aplicación iniciada");
        this.mostrarInterfaz();
    }

    mostrarInterfaz() {
        console.log("Mostrando interfaz principal");
    }
}

// Exportar la clase para uso en otros módulos
module.exports = App;
