import React from "react";
import TextoAtomico from "../atoms/texto";
import styles from "./descripcion.module.css";

const Descripcion: React.FC<{ src: string; descripcion: string; textbtn: string;}> = ({ src, descripcion, textbtn}) => {
  return (
    <div className={`carousel-caption d-md-block ${styles.contenedortitulo}`}>
      <img src={src} className={`${styles.tituloimagen}`} alt="Título en imagen" />
      <TextoAtomico contenido={descripcion} />
      <button type="button" className={`btn ${styles.boton}`}> {textbtn} </button>
    </div>
  );
};

export default Descripcion;