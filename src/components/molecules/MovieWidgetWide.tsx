import React from 'react';
import MovieButton from '../atoms/MovieButtonWide';
import OptionsMenu from '../atoms/OptionMenu';

const MovieWidgetWide: React.FC<{ clase: string; img: string }> = ({ clase, img }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <MovieButton clase={clase} img={img} />
      <div style={{ position: 'absolute', top: '5%', right: '5%', zIndex: 10 }}>
        <OptionsMenu />
      </div>
      
    </div>
    
  );
};

export default MovieWidgetWide;