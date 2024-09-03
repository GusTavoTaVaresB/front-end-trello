import React from 'react';

const Projects = () => {
  return (
    <div className="projects-page" style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif' }}>
      {/* Barra de Navegação Específica */}
      <nav style={{ 
        backgroundColor: '#007bff', 
        padding: '10px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ color: '#fff', fontSize: '24px' }}>FTT - TASKS</div>
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          style={{ padding: '5px', borderRadius: '4px', border: 'none', width: '500px' }} 
        />
      </nav>

      {/* Espaço abaixo da Navbar para evitar sobreposição */}
      <div style={{ marginTop: '60px', padding: '20px' }}>
        <h1 style={{ color: '#007bff', fontSize:'40px' }}>Nossos projetos</h1>

        <div className="projetos">
          <h2>Projetos</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            padding: '20px'
          }}>
            {Array(6).fill('').map((_, index) => (
              <div 
                key={index} 
                style={{ 
                  textAlign: 'center', 
                  border: '1px solid #ddd', 
                  padding: '10px', 
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <div style={{ 
                  width: '150px', 
                  height: '150px', 
                  backgroundColor: '#ccc', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  margin: '0 auto 10px'
                }}>
                  150 x 150
                </div>
                <p>FTT - Tasks</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
