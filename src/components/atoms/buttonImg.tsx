import React from 'react';
import styles from './buttonImg.module.css';

interface ButtonImgProps {
  img: string;
}

const ButtonImg: React.FC<ButtonImgProps> = ({ img }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="button" className={styles.image} />
    </div>
  );
};

export default ButtonImg;