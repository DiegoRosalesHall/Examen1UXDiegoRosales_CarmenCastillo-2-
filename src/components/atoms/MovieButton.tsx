import React from "react";
import styles from "./MovieButton.module.css";

const MovieButton: React.FC<{ clase: string; img: string }> = ({ clase, img }) => {
  return (
    <button className={`${styles.MovieButton} ${clase}`}>
      <img src={img} alt="Movie" className={styles.MovieImage} />
    </button>
  );
};

export default MovieButton;
