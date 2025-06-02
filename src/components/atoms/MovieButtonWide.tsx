import React from "react";
import styles from "./MovieButtonWide.module.css";

const MovieButtonWide: React.FC<{ clase: string; img: string }> = ({ clase, img }) => {
  return (
    <button className={`${styles.MovieButton} ${clase}`}>
      <img src={img} alt="Movie" className={styles.MovieImage} />
      <div style={{ position: "absolute", top: "60%", right: "85%", zIndex: 10 }}>
        <img src="../img/playIcon.png" alt="icon" style={{ height: "3vw", width: "3vw", border: "none" }} />
      </div>
      <div className="progress bg-secondary" style={{ width: "100%", height: "1vw"}} role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar" style={{ width: "90%", height: "1vw", backgroundColor: "white" }}></div>
      </div>
    </button>
  );
};

export default MovieButtonWide;