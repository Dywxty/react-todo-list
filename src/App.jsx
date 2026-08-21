import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BotaoLimpar from "./components/BotaoLimpar";

function App() {
    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");

        if (!tarefasSalvas) {
            return [];
        }

        try {
            const tarefasConvertidas = JSON.parse(tarefasSalvas);
            return Array.isArray(tarefasConvertidas) ? tarefasConvertidas : [];
        } catch {
            localStorage.removeItem("tarefas");
            return [];
        }
    });

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
        <div className="pagina">

            <Header />

            <div className="container">

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

                <BotaoLimpar
                    limparTarefas={limparTarefas}
                />

            </div>

            <Footer />

        </div>
    );
}

export default App;