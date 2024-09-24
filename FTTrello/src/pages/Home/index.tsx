import { useState } from 'react';

interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
}

const TarefaComponent = ({ tarefa }: { tarefa: Tarefa }) => {
    return (
        <div style={{ 
            backgroundColor: "#f0f0f0", 
            padding: "20px", 
            margin: "10px", 
            width: "200px", 
            height: "200px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            borderRadius: "10px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
        }}>
            <h2 style={{ fontSize: "18px", color: "#333", marginBottom: "10px" }}>{tarefa.titulo}</h2>
            <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>{tarefa.descricao}</p>
        </div>
    );
};

const Home = () => {
    const [tarefas] = useState<Tarefa[]>([
        { id: 1, titulo: "Tarefa 1", descricao: "Descrição da tarefa 1" },
        { id: 2, titulo: "Tarefa 2", descricao: "Descrição da tarefa 2" },
        { id: 3, titulo: "Tarefa 3", descricao: "Descrição da tarefa 3" },
        { id: 4, titulo: "Tarefa 4", descricao: "Descrição da tarefa 4" }, // Adicionei mais tarefas
        { id: 5, titulo: "Tarefa 5", descricao: "Descrição da tarefa 5" },
        { id: 6, titulo: "Tarefa 6", descricao: "Descrição da tarefa 6" },
    ]);

    return (
        <div>
            <h1 style={{
                backgroundColor: "#0088CC", 
                color: "#F3F3F3", 
                fontSize: "45px", 
                paddingLeft: 10, 
                paddingBottom: 30, 
                paddingTop: 30, 
                textAlign: "center" 
            }}>
                FTT - TASKS
            </h1>
            <div style={{ backgroundColor: "white", padding: "20px" }}>
                <h2 style={{ color: "#0088CC", textAlign: "center" }}>Projetos</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    padding: "20px"
                }}>
                    {tarefas.map((tarefa) => (
                        <TarefaComponent key={tarefa.id} tarefa={tarefa} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
