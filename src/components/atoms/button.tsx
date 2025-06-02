import React from 'react';
/*boton para los prev y next*/ 
const BotonAtomico: React.FC<{clase: string; dataTarget: string; dataSlide: string; index:number; onSelect: (index: number) => void;}> = ({clase, dataTarget, dataSlide, index, onSelect}) => {
  return (
    <button className={clase} type="button" data-bs-target={dataTarget} data-bs-slide={dataSlide} onClick={() => onSelect(index)}>
      <span className={dataSlide === "prev" ? "carousel-control-prev-icon" : "carousel-control-next-icon"} aria-hidden="true"></span>
      <span className="visually-hidden">{dataSlide === "prev" ? "Anterior" : "Siguiente"}</span>
    </button>
  );
};

export default BotonAtomico;