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
 e.target.style.backgroundColor = 'grey';

}
// function criaBotao(){
//     let listaDeItens = document.getElementsByTagName('li');
//     let botoesLi = [];
//     for(let index = 0; index < listaDeItens.length; index += 1){
//         botoesLi[index] = listaDeItens[index];
//         botoesLi[index].addEventListener('click', recebeClick2);
//     }
// }
// criaBotao();