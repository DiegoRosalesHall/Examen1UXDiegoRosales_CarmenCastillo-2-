import React from 'react';
import styles from "../molecules/descripcion.module.css";

const PosterAtomico: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img className={`d-block w-100 rounded ${styles.carruselimage}`} src={src} alt={alt} />;
};

export default PosterAtomico;