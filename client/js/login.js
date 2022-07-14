function redireccionar(){
    window.location.href = "profile.html";
}

const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form-login");
const parrafo = document.getElementById("p-warnings");

const btn_enviar = document.getElementById("btn-btn-init");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let authEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    let invitado = ["admin@gmail.com","admin123"];
    
    if (!authEmail.test(email.value)) {
        warnings += `El email no es valido. <br>`;
        entrar = true;
    }

    if (pass.value.length < 8) {
        warnings += `La contraseña no es valida. Debe ser mayor a 8 caracteres. <br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        if ((email.value == invitado[0]) && (pass.value == invitado[1])){
            window.location.href = "profile.html";
        }
        /*const elements = document.querySelectorAll(".grupo");
        elements.forEach(elem => {
            elem.remove();
        });
        
        btn_enviar.remove();*/

        /*parrafo.innerHTML = "¡Ya te registraste! <br>";

        parrafo.style.fontSize = "24px";
        parrafo.style.fontWeight = "bold";

        setTimeout("redireccionar()", 3000);*/ //Redirecciona a su perfil después de 3 segundos.

    }
});


