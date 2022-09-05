const elementoOl = document.createElement('ol');
elementoOl.id = 'lista-tarefas';
document.body.appendChild(elementoOl);

function recebeClick() {
  const tarefaNoInput = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const elementoIl = document.createElement('li');
  elementoIl.innerText = tarefaNoInput;
  elementoIl.addEventListener('click', recebeClick2);
  lista.appendChild(elementoIl);
  document.getElementById('texto-tarefa').value = '';
}

const botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', recebeClick);

function recebeClick2(e){
  let listaDeLi = document.getElementsByClassName('selected');
  for(let index = 0; index < listaDeLi.length; index += 1){
    console.log('entrou');
    document.getElementsByClassName('selected')[index].classList.remove('selected');
  }
  
  e.target.classList.add("selected");
}