document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío predeterminado del formulario

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === 'Antonio' && password === '1234567') {
                alert('Inicio de sesión exitoso. Redirigiendo a la interfaz principal.');
                window.location.href = './interfaz principal/index.html'; // Ruta a tu interfaz principal
            } else {
                alert('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        });
    }
});
