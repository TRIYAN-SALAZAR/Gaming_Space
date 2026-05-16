emailjs.init("WBLGdYmJcMoHsK0LR");

const helpForm =
document.getElementById("helpForm");

const responseMessage =
document.getElementById("responseMessage");

console.log("HELP JS CARGADO");

helpForm.addEventListener("submit", function(event){

    event.preventDefault();

    console.log("FORMULARIO ENVIADO");

    const templateParams = {

        user_name:
        document.getElementById("userName").value,

        user_email:
        document.getElementById("userEmail").value,

        message:
        document.getElementById("userMessage").value
    };

    console.log(templateParams);

    emailjs.send(

        "gamingservice_soporte",

        "template_uy7frbr",

        templateParams
    )

    .then(function(response){

        console.log("SUCCESS!", response);

        responseMessage.textContent =
        "Reporte enviado correctamente.";

        responseMessage.style.color =
        "#10b981";

        helpForm.reset();
    })

    .catch(function(error){

        console.log("ERROR COMPLETO:", error);

        responseMessage.textContent =
        "Ocurrió un error al enviar.";

        responseMessage.style.color =
        "#ef4444";
    });
});