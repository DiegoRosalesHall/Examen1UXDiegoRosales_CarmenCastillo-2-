import React, { useState } from 'react';

const OptionsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Boton 3 puntos */}
      <button
        onClick={toggleMenu}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          lineHeight: 1,
          userSelect: 'none',
        }}
        aria-label="Abrir opciones"
      >
        &#8942;
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: '#222',
            color: '#fff',
            listStyle: 'none',
            padding: '8px 0',
            margin: 0,
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            minWidth: '150px',
            zIndex: 1000,
          }}
        >
          <li
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              window.open("https://youtu.be/k0DqRstCgj4?feature=shared", "_blank"); //de sus mejores canciones btw
              setIsOpen(false);
            }}
          >
            Añadir a la lista
          </li>
          <li
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              window.open("https://media.diariouno.com.ar/adjuntos/298/imagenes/005/231/0005231169.gif", "_blank");
              setIsOpen(false);
            }}
          >
            Mas informacion
          </li>
        </ul>
      )}
    </div>
  );
};

export default OptionsMenu;