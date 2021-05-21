import { ordenaDatas, removeDatasRepetidas } from '../service/data.js';
import { criaData } from './criarData.js';

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadasatradas = JSON.parse(localStorage.getItem('tarefas'))||[];
    
    lista.innerHTML = " ";
    const datasUnicas = removeDatasRepetidas(tarefasCadasatradas);
    ordenaDatas(datasUnicas);
    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));
    });
}