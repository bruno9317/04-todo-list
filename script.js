let elementoOl = document.createElement("ol");
elementoOl.id = 'lista-tarefas';
document.body.appendChild(elementoOl);

let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', recebeClick)

function recebeClick() {
    let tarefaNoInput = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas');
    let elementoIl = document.createElement('li');
    elementoIl.innerText = tarefaNoInput;
    lista.appendChild(elementoIl);

    document.getElementById('texto-tarefa').value = '';
}