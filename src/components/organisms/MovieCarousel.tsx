import React, { useState } from 'react';
import MovieWidget from '../molecules/MovieWidget';
import BotonAtomico from '../atoms/button';

const MovieCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    { img: '/img/gumball.webp' },
    { img: '/img/otro1.webp' },
    { img: '/img/otro2.webp' },
    // Agrega más imágenes si quieres
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
      {/* Botón anterior */}
      <BotonAtomico
        clase="carousel-control-prev"
        dataTarget="#movieCarousel"
        dataSlide="prev"
        index={currentIndex}
        onSelect={handlePrev}
      />

      {/* Widget actual */}
      <div style={{ width: '15vw' }}>
        <MovieWidgqet img={movies[currentIndex].img} />
      </div>

      {/* Botón siguiente */}
      <BotonAtomico
        clase="carousel-control-next"
        dataTarget="#movieCarousel"
        dataSlide="next"
        index={currentIndex}
        onSelect={handleNext}
      />
    </div>
  );
};

export default MovieCarousel;