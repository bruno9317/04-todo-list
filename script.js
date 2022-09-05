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

function recebeClick5() {
  let listaDeCompleto = document.getElementsByClassName('completed');
  for (let index = listaDeCompleto.length; index >= listaDeCompleto.length; index -= 1) {
    console.log(listaDeCompleto.length);
    console.log(index);
    if (listaDeCompleto.length > 0) {
      document.getElementsByClassName('completed')[index - 1].remove();
    }
    listaDeCompleto = document.getElementsByClassName('completed');
  }
}

const botao3 = document.getElementById('remover-finalizados');
botao3.addEventListener('click', recebeClick5);

function recebeClick6() {
  const listaDeLi = document.getElementsByTagName('li');
  let quantDeLi = 0;
  const textoDasLi = [];
  const classesDasLi = [];
  quantDeLi = listaDeLi.length;
  for (let index = 0; index < listaDeLi.length; index += 1) {
    textoDasLi[index] = listaDeLi[index].innerText;
    const listaDeClass = document.getElementsByTagName('li')[index].classList;
    if (listaDeClass.length > 0) {
      classesDasLi[index] = document.getElementsByTagName('li')[index].classList.value;
    } else {
      classesDasLi[index] = 'n';
    }
  }
  localStorage.setItem('Quantidade-de-li', quantDeLi);
  localStorage.setItem('innerText-li', textoDasLi);
  localStorage.setItem('classes', classesDasLi);
}

const botao4 = document.getElementById('salvar-tarefas');
botao4.addEventListener('click', recebeClick6);

window.onload = function () {
  const quantDeLi = parseInt(localStorage.getItem('Quantidade-de-li'));
  let textoDasLi = localStorage.getItem('innerText-li');
  let classesDasLi = localStorage.getItem('classes');
  if (textoDasLi !== null) {
    textoDasLi = textoDasLi.split(',');
  }
  if (classesDasLi !== null) {
    classesDasLi = classesDasLi.split(',');
  }
  const elementoOl = document.createElement('ol');
  elementoOl.id = 'lista-tarefas';
  document.body.appendChild(elementoOl);

  const lista = document.getElementById('lista-tarefas');
  for (let index = 0; index < quantDeLi; index += 1) {
    const elementoIl = document.createElement('li');
    lista.appendChild(elementoIl);
  }

  const listaDeLi = document.getElementsByTagName('li');
  for (let index = 0; index < listaDeLi.length; index += 1) {
    listaDeLi[index].innerText = textoDasLi[index];
  }

  for (let index = 0; index < listaDeLi.length; index += 1) {
    listaDeLi[index].classList = classesDasLi[index];
  }
};
