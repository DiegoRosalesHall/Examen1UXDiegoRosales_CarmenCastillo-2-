import React from 'react';
import styles from "../molecules/descripcion.module.css";

const TextoAtomico: React.FC<{ contenido: string }> = ({ contenido }) => {
  return <p className={`${styles.descripcion}`} >{contenido}</p>;
};

export default TextoAtomico;