import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState([
        () => {
            const tarefasSalvas = localStorage.getItem("tarefas");
            return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
        }
    ]);

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        console.log("O componente foi montado ou atualizado.");
    }, [tarefas]);

    function adicionarTarefa() {
        if (texto.trim() !== "") {

            const tarefaExistente = tarefas.find(
                tarefa => tarefa.texto === texto
            );

            if (tarefaExistente) {
                alert("Essa tarefa já foi adicionada!");
                return;
            }

            setTarefas([
                ...tarefas,
                {
                    texto: texto,
                    concluida: false
                }
            ]);

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
                adicionarTarefa={adicionarTarefa}
            />

            <p className="digitado">
                Você digitou: {texto}
            </p>

            {tarefas.length === 0 && (
                <p className="vazio">
                    Nenhuma tarefa cadastrada.
                </p>
            )}

            <TaskList
                tarefas={tarefas}
                concluirTarefa={concluirTarefa}
                removerTarefa={removerTarefa}
            />  

            <p className="digitado">
                Total tarefas: {tarefas.length}
            </p>

            <button onClick={limparTarefas}>
                Limpar Tarefas
            </button>

        </div>   
    );
}

export default App;