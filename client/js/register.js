function redireccionar(){
    window.location.href = "index.html";
}

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form-reg");
const parrafo = document.getElementById("warnings");

const btn_enviar = document.getElementById("btn-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let authEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido. <br>`;
        entrar = true;
    }

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
        const elements = document.querySelectorAll(".grupo");
        elements.forEach(elem => {
            elem.remove();
        });
        
        btn_enviar.remove();

        parrafo.innerHTML = "¡Ya te registraste! <br>";

        parrafo.style.fontSize = "24px";
        parrafo.style.fontWeight = "bold";

        setTimeout("redireccionar()", 10000); //Redirecciona a inicio después de 10 segundos.

    }
});


