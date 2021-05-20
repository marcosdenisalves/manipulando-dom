import BotaoConcluir from './componentes/concluiTarefa.js';
import BotaoDeletar from './componentes/deletaTarefa.js';

const exibirValor = (texto) => {
    const lista = document.querySelector('[data-list]');
        
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${texto}</p>`

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeletar());
    lista.appendChild(tarefa);
}

const criarTarefa = (evento) => {
        
    evento.preventDefault();    
        
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    exibirValor(valor);
    input.value = '';
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
    
