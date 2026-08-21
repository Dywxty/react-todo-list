import BotaoAdicionar from "./BotaoAdicionar";

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

            <BotaoAdicionar
                adicionarTarefa={adicionarTarefa}
            />

        </div>
    );
}

export default TaskForm;