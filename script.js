const textArea = document.querySelector(".text-box")
const textResult = document.querySelector(".text-result")
const boyImage = document.querySelector(".img-boy")
const paragraph = document.querySelector(".paragraph")
const btnCopy = document.querySelector(".btn-copy")



function btnEncrypt() {
    const textEncrypt = encriptar(textArea.value)
    textResult.value = textEncrypt

    ocultar();


}

function btnDecrypt() {
    const textDecrypt = desencriptar(textArea.value)
    textResult.value = textDecrypt
    ocultar();

}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
           stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }
        
    }

    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) 
        }
        
    }

    return stringDesencriptado
}


function ocultar() {   
    paragraph.classList.add("ocultar")
    boyImage.classList.add("ocultar")
   }


btnCopy.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".text-result").value
    navigator.clipboard.writeText(contenido);
})


function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode")

    textArea.classList.toggle("text-box-dark")
    let sectionTwoDark = document.querySelector(".section-2");
    sectionTwoDark.classList.toggle("section-2-dark")

    let textResultDark = document.querySelector(".text-result");
    textResultDark.classList.toggle("text-result-dark")

    let alertDark = document.querySelector(".alert");
    alertDark.classList.toggle("alert-dark")

    paragraph.classList.toggle("paragraph-dark")

    let encryptDark = document.querySelector(".btn-encrypt");
    encryptDark.classList.toggle("btn-encrypt-dark")

    let decryptDark = document.querySelector(".btn-decrypt");
    decryptDark.classList.toggle("btn-decrypt-dark")

    btnCopy.classList.toggle("btn-copy-dark")

    let logoDark = document.querySelector(".logo");
    logoDark.classList.toggle("logo-dark")
}