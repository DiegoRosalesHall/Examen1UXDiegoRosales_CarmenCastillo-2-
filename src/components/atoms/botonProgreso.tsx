import React from 'react';

const Boton: React.FC<{ indice: number; activo: boolean; dataTarget: string; onSelect: (index: number) => void }> = ({ indice, activo, dataTarget, onSelect }) => {
    return (
        <button
            type="button"
            data-bs-target={dataTarget}
            data-bs-slide-to={indice}
            className={activo ? "active" : ""}
            onClick={() => onSelect(indice)}
        ></button>
    );
};

export default Boton;