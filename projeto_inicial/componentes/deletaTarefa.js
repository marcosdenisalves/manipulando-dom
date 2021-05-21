const removerTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
}

const BotaoDeletar = (atualiza, id) => {
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = 'deletar';
    botaoDeletar.classList.add('delete-button');
    botaoDeletar.addEventListener('click', () => removerTarefa(atualiza, id));

    return botaoDeletar;
}

export default BotaoDeletar;