function TaskForm({ texto, setTexto, adicionarTarefa }) {

    return (
        <div className="formulario">

            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        adicionarTarefa();
                    }
                }}
                placeholder="Digite uma tarefa"
            />

            <button onClick={adicionarTarefa}>
                Adicionar
            </button>

        </div>
    );
}

export default TaskForm;