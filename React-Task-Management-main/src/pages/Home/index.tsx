import { useState } from 'react';

interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
}

const TarefaComponent = ({ tarefa }: { tarefa: Tarefa }) => {
    return (
        <div style={{ backgroundColor: "#f0f0f0", padding: 10, margin: 10 }}>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>
        </div>
    );
};

const Home = () => {
    const [tarefas] = useState<Tarefa[]>([
        { id: 1, titulo: "Tarefa 1", descricao: "Descrição da tarefa 1" },
        { id: 2, titulo: "Tarefa 2", descricao: "Descrição da tarefa 2" },
        { id: 3, titulo: "Tarefa 3", descricao: "Descrição da tarefa 3" },
    ]);

    return (
        <div>
            <h1 style={{ backgroundColor: "#0088CC", color: "#F3F3F3", fontSize: "45px",
                paddingLeft: 10, paddingBottom: 30, paddingTop: 30 }}>FTT Tarefas</h1>
            <div style={{ backgroundColor: "white" }}>
                <h1 style={{ marginLeft: "25px", color: "#0088CC" }}>Nossos projetos</h1>
                {tarefas.map((tarefa) => (
                <TarefaComponent key={tarefa.id} tarefa={tarefa} />
                ))}
            </div>
        </div>
    );
};

export default Home;