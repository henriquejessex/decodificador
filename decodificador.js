const botaoEncriptar = document.getElementById('encriptar');
const botaoDesencriptar = document.getElementById('desencriptar');
const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const imagem = document.getElementById('imagem');
const botaoCopiar = document.getElementById('copiar');
const copiarTexto = document.getElementById('copiar');

copiarTexto.addEventListener('click', () => {
    var conteudo = resultado.textContent;
    navigator.clipboard.writeText(conteudo)
        .then(() => {
            console.log("Texto copiado: " + conteudo);
        })
        .catch((error) => {
            console.error("Erro ao copiar texto: " + error);
        });
});

resultado.textContent = '';
botaoCopiar.classList.add('ocultar');
botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;
botaoCopiar.onclick = copiarTexto;

function recuperarTexto() {
    console.log('recuperarTexto', texto.value);
    return texto.value;
}

function encriptar() {
    ocultarImagem();
    var encriptResult = encriptarTexto(recuperarTexto());
    resultado.textContent += encriptResult;
    console.log('encriptado', encriptResult);
}

function desencriptar() {
    ocultarImagem();
    var decriptResult = desencriptarTexto(recuperarTexto());
    resultado.textContent += decriptResult;
    console.log('desencriptado', decriptResult);
}

function encriptarTexto(mensagem) {
    var textInput = mensagem;
    var textOutput = '';

    for (var i = 0; i < textInput.length; i++) {
        switch (textInput[i]) {
            case 'a':
                textOutput += 'ai';
                break;
            case 'e':
                textOutput += 'enter';
                break;
            case 'i':
                textOutput += 'imes';
                break;
            case 'o':
                textOutput += 'ober';
                break;
            case 'u':
                textOutput += 'ufat';
                break;
            default:
                textOutput += textInput[i];
                break;
        }
    }

    return textOutput;
}

function desencriptarTexto(mensagem) {
    var textInput = mensagem;
    var textOutput = '';

    for(var i = 0; i < textInput.length; i++){
        switch (textInput[i]) {
            case 'a':
                textOutput += 'a';
                i++;
                break;
            case 'e':
                textOutput += 'e';
                i += 4;
                break;
            case 'i':
                textOutput += 'i';
                i += 3;
                break;
            case 'o':
                textOutput += 'o';
                i += 3;
                break;
            case 'u':
                textOutput += 'u';
                i += 4;
                break;
            default:
                textOutput += textInput[i];
                break;
        }
    }
    return textOutput;
}


function ocultarImagem() {
    imagem.classList.add('ocultar'); 
    botaoCopiar.classList.add('show');
}

