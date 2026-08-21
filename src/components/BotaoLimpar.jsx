function BotaoLimpar({ limparTarefas }) {
    return (
        <button
            className="limpar"
            onClick={limparTarefas}
        >
            Limpar Tarefas
        </button>
    );
}

export default BotaoLimpar;