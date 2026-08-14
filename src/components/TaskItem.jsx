function TaskItem({
    tarefa,
    indice,
    concluirTarefa,
    removerTarefa
}) {

    return (

        <li className="item">

            <span
                className={
                    tarefa.concluida
                        ? "concluida"
                        : ""
                }
            >
                {tarefa.texto}
            </span>

            <div className="acoes">

                <button
                    onClick={() =>
                        concluirTarefa(indice)
                    }
                >
                    {
                        tarefa.concluida
                            ? "Desfazer"
                            : "Concluir"
                    }
                </button>

                <button
                    onClick={() =>
                        removerTarefa(indice)
                    }
                >
                    Remover
                </button>

            </div>

        </li>

    );
}

export default TaskItem;