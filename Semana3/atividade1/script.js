let valores = [];

function adicionar() {
    let input = document.getElementById("inputValor")
    let valor = input.value.trim(); //"trim()" remove os espaços vazio da palavra digitada

    if (valor !==""){
            valores.push(valor);
            valores.sort()
            atualizarLista();
            input.value = "";
            input.focus();
    }

    else {
        alert("Digite um valor Válido!")
    }

function atualizarLista(){
    let lista = document.getElementById("listaOrdenada")
    lista.innerHTML = "";

    valores.forEach(function(item){
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}



}