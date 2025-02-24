

// Função Data

function obterDataFormatada() {
    const dataAtual = new Date();
    const opcoes = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    return dataAtual.toLocaleDateString('pt-BR', opcoes);
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("data").textContent = obterDataFormatada();
});


// Função Hora Atual

function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;

    document.getElementById("relogio").textContent = horarioFormatado;

    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();

// Função Palindromo

function verificarPalindromo() {
    let texto = document.getElementById("texto").value.toLowerCase().replace(/\s/g, "");

    if (texto === "") {
        alert("Digite um texto!");
        return;
    }

    let invertido = texto.split("").reverse().join("");

    if (texto === invertido) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo!");
    }
}