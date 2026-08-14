import TaskItem from "./TaskItem";

function TaskList({
    tarefas,
    concluirTarefa,
    removerTarefa
}) {

    return (

        <ul className="lista">

            {
                tarefas.map(
                    (tarefa, indice) => (

                        <TaskItem
                            key={indice}
                            tarefa={tarefa}
                            indice={indice}
                            concluirTarefa={
                                concluirTarefa
                            }
                            removerTarefa={
                                removerTarefa
                            }
                        />

                    )
                )
            }

        </ul>

    );
}

export default TaskList;