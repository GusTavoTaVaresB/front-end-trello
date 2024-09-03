import { useState } from "react";

const Members = () => {
    const [filter, setFilter] = useState('');
  
    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };
  
    const filteredMembers = [
        { name: 'Arthur Caixeta' },
        { name: 'Gustavo Tavares' },
        { name: 'João Pedro Barbosa' },
        { name: 'Luiz Antônio' },
    ].filter((member) => member.name.toLowerCase().includes(filter.toLowerCase()));
  
    return (
      <>
        <div>Membros</div>
        <div style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
          <div style={{ marginBottom: 10 }}>
            <input
                type="text"
                value={filter}
                onChange={handleFilter}
                placeholder="Filtrar por nome"
                style={{ width: '100%', padding: 10, fontSize: 18 }}
            />
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