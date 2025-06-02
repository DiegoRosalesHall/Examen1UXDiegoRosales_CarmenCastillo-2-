import React from 'react'
import styles from "./movieButton.module.css";
const MovieButton: React.FC<{clase:string, img:string }> = ({clase,img}) =>{
    return (
    <button className={`${styles.MovieButton} ${clase}`}>
      <img src={img} alt="Movie" style={{ height: "22.5vw", width: "15vw", border:"none" }} />
    </button>
  );
}
export default MovieButton;

