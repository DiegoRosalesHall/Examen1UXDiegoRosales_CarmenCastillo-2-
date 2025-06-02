import React from 'react';
import MovieButtonTop from '../atoms/MovieButtonTop';

const MovieWidgetTop: React.FC<{ clase: string; img: string; top: string }> = ({ clase, img, top }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <MovieButtonTop clase={clase} img={img} top={top} />
    </div>
  );
};

export default MovieWidgetTop;