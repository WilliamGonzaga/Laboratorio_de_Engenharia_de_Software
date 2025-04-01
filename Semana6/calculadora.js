// Cria a estrutura base da calculadora
const app = document.getElementById('app');
app.style.display = 'flex';
app.style.justifyContent = 'center';
app.style.marginTop = '50px';

// Container
const container = document.createElement('div');
container.style.background = '#000';
container.style.padding = '20px';
container.style.borderRadius = '20px';
container.style.width = '300px';
container.style.display = 'flex';
container.style.flexDirection = 'column';
app.appendChild(container);

// Display
const display = document.createElement('div');
display.style.background = '#000';
display.style.color = '#fff';
display.style.fontSize = '48px';
display.style.textAlign = 'right';
display.style.padding = '20px 10px';
display.innerText = '0';
container.appendChild(display);

// Botões
const botoes = [
  ['AC', '±', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
];

botoes.forEach((linha) => {
  const linhaDiv = document.createElement('div');
  linhaDiv.style.display = 'flex';
  linha.forEach((texto) => {
    const btn = document.createElement('button');
    btn.innerText = texto;
    btn.style.flex = texto === '0' ? '2' : '1';
    btn.style.margin = '5px';
    btn.style.height = '60px';
    btn.style.border = 'none';
    btn.style.borderRadius = '30px';
    btn.style.fontSize = '24px';
    btn.style.cursor = 'pointer';

    // Cores
    if (['/', '*', '-', '+', '='].includes(texto)) {
      btn.style.background = 'orange';
      btn.style.color = 'white';
    } else if (['AC', '±', '%'].includes(texto)) {
      btn.style.background = '#ccc';
    } else {
      btn.style.background = '#333';
      btn.style.color = 'white';
    }

    btn.addEventListener('click', () => {
      handleClick(texto);
    });

    linhaDiv.appendChild(btn);
  });
  container.appendChild(linhaDiv);
});

// Lógica da calculadora
let current = '';
let resetNext = false;

function handleClick(valor) {
  if (valor === 'AC') {
    current = '';
    display.innerText = '0';
  } else if (valor === '=') {
    try {
      current = eval(current).toString();
      display.innerText = current;
      resetNext = true;
    } catch {
      display.innerText = 'Erro';
      current = '';
    }
  } else {
    if (resetNext && !['/', '*', '-', '+'].includes(valor)) {
      current = '';
      resetNext = false;
    }
    current += valor;
    display.innerText = current;
  }
}
