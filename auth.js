// Módulo de autenticación de usuarios
class Auth {
    constructor() {
        this.usuariosRegistrados = [];
    }

    registrarUsuario(nombre, email, password) {
        // Validar que el email no esté ya registrado
        if (this.usuariosRegistrados.find(u => u.email === email)) {
            throw new Error("Email ya registrado");
        }

        const nuevoUsuario = {
            id: Date.now(),
            nombre: nombre,
            email: email,
            password: this.hashPassword(password),
            fechaRegistro: new Date()
        };

        this.usuariosRegistrados.push(nuevoUsuario);
        console.log(`Usuario ${nombre} registrado exitosamente`);
        return nuevoUsuario;
    }

    hashPassword(password) {
        // Simulación de hash de contraseña
        return `hash_${password}_${Date.now()}`;
    }

    login(email, password) {
        const usuario = this.usuariosRegistrados.find(u => u.email === email);
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }

        // En una implementación real verificaríamos el hash
        console.log(`Usuario ${usuario.nombre} logueado correctamente`);
        return usuario;
    }
}

module.exports = Auth;
