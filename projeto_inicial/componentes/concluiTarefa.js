const BotaoConcluir = () =>  {
    const botaoConcluir = document.createElement('button');
    
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'concluir';

    botaoConcluir.addEventListener('click', concluirTarefa);

    return botaoConcluir;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluir;