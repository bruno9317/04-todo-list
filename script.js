const elementoOl = document.createElement('ol');
elementoOl.id = 'lista-tarefas';
document.body.appendChild(elementoOl);

function recebeClick2(e) {
  const listaDeLi = document.getElementsByClassName('selected');
  for (let index = 0; index < listaDeLi.length; index += 1) {
    document.getElementsByClassName('selected')[index].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function recebeClick3(e) {
  const listaDeLi = e.target.classList;
  let sera = false;
  for (let index = 0; index < listaDeLi.length; index += 1) {
    if (listaDeLi[index] === 'completed') {
      sera = true;
    }
  }
  if (sera === true) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function recebeClick() {
  const tarefaNoInput = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const elementoIl = document.createElement('li');
  elementoIl.innerText = tarefaNoInput;
  elementoIl.addEventListener('click', recebeClick2);
  elementoIl.addEventListener('dblclick', recebeClick3);
  lista.appendChild(elementoIl);
  document.getElementById('texto-tarefa').value = '';
}

const botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', recebeClick);

function recebeClick4() {
  let listaDeLi = document.getElementsByTagName('li');
  for (let index = listaDeLi.length; index >= listaDeLi.length; index -= 1) {
    console.log(listaDeLi.length);
    console.log(index);
    if (listaDeLi.length > 0) {
      document.getElementsByTagName('li')[index - 1].remove();
    }
    listaDeLi = document.getElementsByTagName('li');
  }
}

const botao2 = document.getElementById('apaga-tudo');
botao2.addEventListener('click', recebeClick4);
