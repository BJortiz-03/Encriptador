
const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");


function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    const mensaje.value = textoEncriptado();

}
function btnencriptar(StringParaEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u",
        "ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][0]);
        }
    }

    return (StringParaEncriptar);

}