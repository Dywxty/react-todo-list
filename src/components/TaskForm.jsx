function TaskForm({
    texto,
    setTexto,
    adicionarTarefa
}) {

    return (

        <div className="formulario">

            <input
                type="text"
                value={texto}
                onChange={(e) =>
                    setTexto(e.target.value)
                }
                placeholder="Digite uma tarefa"
            />

            <button
                onClick={adicionarTarefa}
            >
                Adicionar
            </button>

        </div>

    );
}

export default TaskForm;