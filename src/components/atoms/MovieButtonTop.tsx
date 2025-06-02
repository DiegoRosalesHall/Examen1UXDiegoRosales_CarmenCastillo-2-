import React from "react";
import styles from "./MovieButtonTop.module.css";
import OptionsMenu from "./OptionMenu"; 

const MovieButtonTop: React.FC<{ clase: string; img: string; top: string }> = ({ clase, img, top }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <img className={styles.imgTop} src={top} alt="top" />
        <div className={styles.buttonWrapper}>
          <button className={`${styles.MovieButtonTop} ${clase}`}>
            <img src={img} alt="Movie" className={styles.MovieImage} />
          </button>
          <div className={styles.options}>
            <OptionsMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieButtonTop;