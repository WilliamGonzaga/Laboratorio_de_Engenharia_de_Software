// Função Par ou Ímpar
function parOuImpar() {
    let numero = prompt("Digite um número:");
    if (isNaN(numero)) {
        alert("Valor inválido. Por favor, insira um número.");
    } else {
        alert(numero % 2 === 0 ? "É par!" : "É ímpar!");
    }
}

// Função Número Primo
function numeroPrimo() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);
    if (isNaN(numero) || numero <= 1) {
        alert("Valor inválido. Por favor, insira um número inteiro maior que 1.");
        return;
    }
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    alert(ehPrimo ? "É primo!" : "Não é primo!");
}

// Função Fatorial
function calcularFatorial() {
    let numero = prompt("Digite um número inteiro positivo:");
    if (isNaN(numero) || numero < 0) {
        alert("Valor inválido. Por favor, insira um número inteiro não negativo.");
        return;
    }
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    alert(`O fatorial de ${numero} é ${fatorial}`);
}

// Função Tipo de Dado Informado
function tipoDeDado() {
    let dado = prompt("Informe um dado:");
    if (!isNaN(dado) && dado.trim() !== "") {
        alert("O tipo do dado é: Number");
    } else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") {
        alert("O tipo do dado é: Boolean");
    } else if (dado.trim() === "") {
        alert("Você informou um dado vazio.");
    } else {
        alert("O tipo do dado é: String");
    }
}
