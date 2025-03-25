const app = document.getElementById("app");

// Variáveis de controle
let homens = 0;
let mulheres = 0;

// Criar container principal
const container = document.createElement("div");
container.style.width = "280px";
container.style.margin = "40px auto";
container.style.padding = "20px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
container.style.fontFamily = "Arial, sans-serif";
container.style.textAlign = "center";
container.style.position = "relative";
app.appendChild(container);

// Título
const titulo = document.createElement("h2");
titulo.innerText = "Total";
titulo.style.margin = "0";
titulo.style.fontSize = "24px";
container.appendChild(titulo);

// Campo total
const totalInput = document.createElement("input");
totalInput.type = "text";
totalInput.disabled = true;
totalInput.value = homens + mulheres;
totalInput.style.fontSize = "18px";
totalInput.style.margin = "10px 0 20px";
totalInput.style.padding = "8px";
totalInput.style.textAlign = "center";
totalInput.style.border = "1px solid #ccc";
totalInput.style.borderRadius = "5px";
container.appendChild(totalInput);

// Botão de reset
const resetBtn = document.createElement("span");
resetBtn.innerText = "🔄";
resetBtn.style.position = "absolute";
resetBtn.style.top = "10px";
resetBtn.style.right = "10px";
resetBtn.style.cursor = "pointer";
resetBtn.title = "Resetar Contador";
resetBtn.onclick = () => {
  homens = 0;
  mulheres = 0;
  atualizar();
};
container.appendChild(resetBtn);

// Container de pessoas
const pessoasContainer = document.createElement("div");
pessoasContainer.style.display = "flex";
pessoasContainer.style.justifyContent = "space-between";
pessoasContainer.style.marginTop = "10px";
container.appendChild(pessoasContainer);

// Função auxiliar para criar uma seção (Homens/Mulheres)
function criarSecao(tipo, imagemURL, contadorInicial) {
  const secao = document.createElement("div");
  secao.style.flex = "0 0 48%";
  secao.style.textAlign = "center";

  const imagem = document.createElement("img");
  imagem.src = imagemURL;
  imagem.style.width = "60px";
  imagem.style.marginBottom = "10px";
  secao.appendChild(imagem);

  const controles = document.createElement("div");
  controles.style.display = "flex";
  controles.style.justifyContent = "center";
  controles.style.gap = "10px";
  controles.style.margin = "5px 0";

  const btnMais = document.createElement("button");
  btnMais.innerText = "+";
  btnMais.style.width = "30px";
  btnMais.style.height = "30px";
  btnMais.style.borderRadius = "50%";
  btnMais.style.border = "none";
  btnMais.style.background = "green";
  btnMais.style.color = "#fff";
  btnMais.style.fontSize = "18px";
  btnMais.style.cursor = "pointer";

  const btnMenos = document.createElement("button");
  btnMenos.innerText = "−";
  btnMenos.style.width = "30px";
  btnMenos.style.height = "30px";
  btnMenos.style.borderRadius = "50%";
  btnMenos.style.border = "none";
  btnMenos.style.background = "red";
  btnMenos.style.color = "#fff";
  btnMenos.style.fontSize = "18px";
  btnMenos.style.cursor = "pointer";

  controles.appendChild(btnMais);
  controles.appendChild(btnMenos);
  secao.appendChild(controles);

  const label = document.createElement("div");
  label.innerText = tipo;
  label.style.fontWeight = "bold";
  label.style.margin = "5px 0";
  secao.appendChild(label);

  const contador = document.createElement("input");
  contador.type = "text";
  contador.disabled = true;
  contador.value = contadorInicial;
  contador.style.width = "50px";
  contador.style.textAlign = "center";
  contador.style.border = "1px solid #ccc";
  contador.style.borderRadius = "5px";
  contador.style.padding = "5px";
  secao.appendChild(contador);

  btnMais.onclick = () => {
    if (tipo === "Homens") homens++;
    else mulheres++;
    atualizar();
  };

  btnMenos.onclick = () => {
    if (tipo === "Homens" && homens > 0) homens--;
    if (tipo === "Mulheres" && mulheres > 0) mulheres--;
    atualizar();
  };

  return { secao, contador };
}

// Criar seções
const homem = criarSecao(
    "Homens",
    "img/foto-homem.png",
    homens
);
const mulher = criarSecao(
    "Mulheres",
    "img/foto-mulher.png",
    mulheres
);

pessoasContainer.appendChild(homem.secao);
pessoasContainer.appendChild(mulher.secao);

// Atualizar total e contadores
function atualizar() {
  totalInput.value = homens + mulheres;
  homem.contador.value = homens;
  mulher.contador.value = mulheres;
}
