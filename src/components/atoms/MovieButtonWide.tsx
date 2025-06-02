import React from 'react'
import styles from "./MovieButtonWide.module.css";
const MovieButtonWide: React.FC<{ clase: string, img: string }> = ({ clase, img }) => {
  return (
    <button className={`${styles.MovieButton} ${clase}`}>
      <img src={img} alt="Movie" style={{ height: "12vw", width: "25vw", border: "none" }} />
      <div style={{ position: 'absolute', top: '60%', right: '85%', zIndex: 10 }}>
        <img src="../img/playIcon.png" alt="icon" style={{ height: "3vw", width: "3vw", border: "none" }} />
      </div>
      <div
        className="progress bg-secondary"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={90}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar"
          style={{ width: "25vw%", height: "1vw", backgroundColor: "white" }}
        ></div>
      </div> {/* PROGRESS BAR */}
    </button>


  );
}
export default MovieButtonWide;
