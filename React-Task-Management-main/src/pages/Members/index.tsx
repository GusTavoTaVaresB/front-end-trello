import { useState } from "react";

const Members = () => {
    const [filter, setFilter] = useState('');

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const handleFilterClick = () => {
        console.log("Filtrar membros");
    };

    const filteredMembers = [
        { name: 'Arthur Caixeta' },
        { name: 'Gustavo Tavares' },
        { name: 'João Pedro Barbosa' },
        { name: 'Luiz Antônio' },
    ].filter((member) => member.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <h1 style={{ backgroundColor: "#D9D9D9", color: "#1D0E7A",
                fontSize: 35, paddingLeft: 35}}>Membros</h1>
            <div style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', left: 590 }}>
                        <input
                            type="text"
                            value={filter}
                            onChange={handleFilter}
                            placeholder="Pesquisar membros"
                            style={{ borderRadius: 10, backgroundColor: "#F3F3F3", width: '200%', padding: 10, fontSize: 18, marginLeft: 30 }}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                            style={{ position: 'absolute', top: 12, left: 10 }}
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <button style={{ backgroundColor: "#0B096D", color: "white", padding: 10, fontSize: 18 }} onClick={handleFilterClick}>
                        Filtrar
                    </button>
                </div>
                {filteredMembers.map((member) => (
                    <p key={member.name}>
                        <span style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>&#128100;</span>
                        {member.name}
                        <div style={{ float: 'right', marginRight: 10 }}>
                            <button style={{ backgroundColor: "#CECECE", marginRight: 10 }}>Exibir Quadros</button>
                            <button style={{ backgroundColor: "#CECECE", marginRight: 10 }}>Administrador</button>
                            <button style={{ backgroundColor: "#CECECE" }}>Remover</button>
                        </div>
                    </p>
                ))}
            </div>
        </>
    );
};

export default Members;