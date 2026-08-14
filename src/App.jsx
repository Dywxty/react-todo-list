import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa() {
        if (texto.trim() !== "") {
            if (tarefas.includes(texto)) {
                alert("Essa tarefa já foi adicionada!");
                return;
            }
            setTarefas([...tarefas, {
                texto: texto,
                concluida: false
            }]);
            setTexto("");
        }
    }

    function removerTarefa(indiceRemover) {
        const novaLista = tarefas.filter(
            (_, indice) => indice !== indiceRemover
        );

        setTarefas(novaLista);
    }

    function limparTarefas() {
        setTarefas([]);
    }

    function concluirTarefa(indiceSelecionado) {
        const novaLista = tarefas.map(
            (tarefa, indice) => {
                if (indice === indiceSelecionado) {
                    return {
                        ...tarefa,
                        concluida: !tarefa.concluida
                    };
                }
                return tarefa;
            }
        );
        setTarefas(novaLista);
    }

    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>

            <TaskForm
                texto={texto}
                setTexto={setTexto}
                adicionarTarefa={
                    adicionarTarefa
                }
            />

            {/* <div className="formulario">
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

            </div> */}

            <p className="digitado">
                Você digitou: {texto}
            </p>

            {
                tarefas.length === 0 &&
                <p className="vazio">Nenhuma tarefa cadastrada.</p>
            }

            <TaskList
                tarefas={tarefas}
                concluirTarefa={
                    concluirTarefa
                }
                removerTarefa={
                    removerTarefa
                }
            />

            {/* <ul className="lista">
                {tarefas.map((tarefa, indice) => (
                    <li
                        key={indice}
                        className="item">
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
                                onClick={() => concluirTarefa(indice)}
                            >
                                {
                                    tarefa.concluida
                                        ? "Desfazer"
                                        : "Concluir"
                                }
                            </button>

                            <button
                                onClick={() => removerTarefa(indice)}
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul> */}

            <p className="digitado">Total tarefas: {tarefas.length}</p>

            <button onClick={limparTarefas}>
                Limpar Tarefas
            </button>
        </div>
    );
}

export default App;