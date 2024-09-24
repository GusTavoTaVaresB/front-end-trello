import { useState } from "react";

const Members = () => {
  const [filter, setFilter] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value);
  const handleFilterClick = () => console.log("Filtrar membros");

  const members = [
    { name: 'Arthur Caixeta', description: 'Desenvolvedor Front-end' },
    { name: 'Gustavo Tavares', description: 'P.O.' },
    { name: 'João Pedro Barbosa', description: 'Desenvolvedor Back-end' },
    { name: 'Luiz Antônio', description: 'Desenvolvedor Front-end' },
  ];

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(filter.toLowerCase()));
  const colors = ['#FF69B4', '#33CC33', '#6666CC', '#CC3333'];

  return (
    <>
      <h1 style={{
        backgroundColor: "#B3BDD7",
        color: "#1D0E7A",
        fontSize: 35,
        paddingLeft: 35,
        paddingTop: 10,
        paddingBottom: 10,
      }}>Membros</h1>

      <div style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
        <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '50%' }}>
            <input
              type="text"
              value={filter}
              onChange={handleFilter}
              placeholder="Pesquisar membros"
              style={{
                borderRadius: 10,
                backgroundColor: "#F3F3F3",
                width: '100%',
                padding: 10,
                fontSize: 18,
                paddingLeft: 40, // espaço para o ícone
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              style={{
                position: 'absolute',
                top: '50%',
                left: 10,
                transform: 'translateY(-50%)',
              }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <button style={{
            backgroundColor: "#0B096D",
            color: "white",
            padding: 10,
            fontSize: 18,
            borderRadius: 10,
            marginLeft: 27,
          }} onClick={handleFilterClick}>
            Filtrar
          </button>
        </div>

        <div>
          {filteredMembers.map((member, index) => (
            <div key={member.name} style={{
              backgroundColor: colors[index % colors.length],
              display: "inline-block",
              border: "solid",
              padding: 10,
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 15,
              cursor: 'pointer',
              marginLeft: 27,
            }} onClick={() => setSelectedMember(member)}>
              <span style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>&#128100;</span>
              {member.name}
              <p style={{ fontSize: 14, marginTop: 10 }}>{member.description}</p>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '50%',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 24, marginBottom: 10 }}>{selectedMember.name}</h2>
              <p style={{ fontSize: 18 }}>{selectedMember.description}</p>
              <button style={{
                backgroundColor: "black",
                color: "white",
                fontSize: 15,
                borderRadius: 5,
                padding: 10,
                marginTop: 20,
              }} onClick={() => setSelectedMember(null)}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Members;
