const BotaoDeletar = (conteudo) => {
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = 'deletar';
    botaoDeletar.classList.add('delete-button');
    botaoDeletar.addEventListener('click', removerTarefa);

    return botaoDeletar;
}

const removerTarefa = (evento) => {
    const botaoRemover = evento.target;

    const elementoPai = botaoRemover.parentElement;
    
    elementoPai.remove();
}

export default BotaoDeletar;