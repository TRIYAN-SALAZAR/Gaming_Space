const toggleRegister = document.getElementById('toggleRegister');
const toggleLogin = document.getElementById('toggleLogin');
const loginBox = document.querySelector('.login-box');
const registerBox = document.querySelector('.register-box');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

toggleRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

toggleLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Login:', { email, password });
    alert('Sesión iniciada como: ' + email);
    loginForm.reset();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    console.log('Registro:', { name, email, password });
    alert('Cuenta creada para: ' + name);
    registerForm.reset();
});
