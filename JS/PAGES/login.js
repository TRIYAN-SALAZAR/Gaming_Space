const loginForm =
    document.getElementById("loginForm");
const loginMessage =
    document.getElementById("loginMessage");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email =
        document.getElementById("loginEmail")
        .value;
    const password =
        document.getElementById("loginPassword")
        .value;

    /* ============================================
       OBTENER USUARIO GUARDADO
       ============================================ */
    const storedUser =
        JSON.parse(
            localStorage.getItem("user")
        );

    /* ============================================
       VALIDAR EXISTENCIA
       ============================================ */

    if (!storedUser) {

        loginMessage.textContent =

            "No existe una cuenta registrada.";

        loginMessage.style.color =
            "#ef4444";

        return;
    }

    /* ============================================
       VALIDAR CREDENCIALES
       ============================================ */

    if (

        email === storedUser.email &&

        password === storedUser.password
    ) {

        /* ============================================
           CREAR SESION
           ============================================ */

        localStorage.setItem(

            "loggedUser",

            JSON.stringify(storedUser)
        );

        loginMessage.textContent =

            "Inicio de sesión exitoso.";

        loginMessage.style.color =
            "#10b981";

        /* ============================================
           REDIRECCION
           ============================================ */

        setTimeout(() => {

            window.location.href =
                "index.html";

        }, 1500);

    } else {

        loginMessage.textContent =

            "Correo o contraseña incorrectos.";

        loginMessage.style.color =
            "#ef4444";
    }
});