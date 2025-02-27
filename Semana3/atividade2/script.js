class Carro {
    constructor(marca, modelo, ano, cor, kilometragem, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = parseInt(ano);
        this.cor = cor;
        this.kilometragem = parseInt(kilometragem);
        this.valorFipe = parseFloat(valorFipe);
    }

    anosUtilizacao() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    valorMercado() {
        const anosUso = this.anosUtilizacao();
        const kmAno = this.kilometragem / (anosUso || 1); 

        if (kmAno <= 30000) {
            return this.valorFipe * 1.1;
        } else if (kmAno > 30000 && kmAno <= 50000) {
            return this.valorFipe; 
        } else {
            return this.valorFipe * 0.9;
        }
    }
}

function cadastrarCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const kilometragem = document.getElementById("kilometragem").value;
    const valorFipe = document.getElementById("valor_fipe").value;

    if (!marca || !modelo || !ano || !cor || !kilometragem || !valorFipe) {
        alert("Preencha todos os campos!");
        return;
    }

    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valorFipe);

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Marca:</strong> ${carro.marca}</p>
        <p><strong>Modelo:</strong> ${carro.modelo}</p>
        <p><strong>Ano:</strong> ${carro.ano}</p>
        <p><strong>Cor:</strong> ${carro.cor}</p>
        <p><strong>Quilometragem:</strong> ${carro.kilometragem} km</p>
        <p><strong>Valor FIPE:</strong> R$ ${carro.valorFipe.toFixed(2)}</p>
        <p><strong>Anos de Utilização:</strong> ${carro.anosUtilizacao()} anos</p>
        <p><strong>Valor de Mercado:</strong> R$ ${carro.valorMercado().toFixed(2)}</p>
    `;
}
