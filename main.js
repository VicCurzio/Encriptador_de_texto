const btnEncriptar = document.querySelector("#btnEncriptar");
btnEncriptar.addEventListener("click", textoEncriptado);

function textoEncriptado() {
    const textarea = document.querySelector("#textareaEscribir");
    const texto = textarea.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z]/g, "")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    const resultadoEncriptado = document.querySelector("#resultadoEncriptado");
    resultadoEncriptado.textContent = texto;

    const imgElement = document.querySelector(".noEncontrado");
    const h2Element = document.querySelector("h2");
    const pElement = document.querySelector(".textoDesencriptado");

    imgElement.style.display = "none";
    h2Element.style.display = "none";
    pElement.style.display = "none";

    agregarBotonCopiar(resultadoEncriptado);
}

const btnDesencriptar = document.querySelector("#btnDesencriptar");
btnDesencriptar.addEventListener("click", textoDesencriptado);

function textoDesencriptado() {
    const textarea = document.querySelector("#textareaEscribir");
    const texto = textarea.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z]/g, "")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    const resultadoEncriptado = document.querySelector("#resultadoEncriptado");
    resultadoEncriptado.textContent = texto;

    const imgElement = document.querySelector(".noEncontrado");
    const h2Element = document.querySelector("h2");
    const pElement = document.querySelector(".textoDesencriptado");

    imgElement.style.display = "none";
    h2Element.style.display = "none";
    pElement.style.display = "none";

    agregarBotonCopiar(resultadoEncriptado);
}

let botonCopiado = false;

function agregarBotonCopiar(contenedor) {
    if (!botonCopiado) {
        const btnCopiar = document.createElement("input");
        btnCopiar.type = "button";
        btnCopiar.value = "Copiar";
        btnCopiar.id = "btnCopiar";
        btnCopiar.className = "btn";
        contenedor.insertAdjacentElement("afterend", btnCopiar);

        btnCopiar.addEventListener("click", function () {
            const resultadoTexto = contenedor.textContent;
            if (resultadoTexto) {
                const tempInput = document.createElement("input");
                tempInput.value = resultadoTexto;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
            }
        });

        botonCopiado = true;
    }
}

