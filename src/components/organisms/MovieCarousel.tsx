import React, { useRef } from 'react';
import MovieWidget from '../molecules/MovieWidget';
import BotonAtomico from '../atoms/button';
import styles from './MovieCarousel.module.css';
import MovieWidgetWide from '../molecules/MovieWidgetWide';

interface MovieCarouselProps {
  imagenes: string[];
  tipo :string;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ imagenes, tipo }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === 'prev' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if(tipo=="normal"){
  return (
    
    <div className={styles.movieCarWrapper}>
      <BotonAtomico
        clase={`${styles.scrollButton} ${styles.left}`}
        dataTarget="#movieCar"
        dataSlide="prev"
        index={0}
        onSelect={() => scroll('prev')}
      />

      <div className={styles.movieCarContainer} ref={scrollRef}>
        {imagenes.map((img, i) => (
          <div key={i} className={styles.movieCarItem}>
            <MovieWidget clase="MovieButton" img={img} />
          </div>
        ))}
      </div>

      <BotonAtomico
        clase={`${styles.scrollButton} ${styles.right}`}
        dataTarget="#movieCar"
        dataSlide="next"
        index={0}
        onSelect={() => scroll('next')}
      />
    </div>
  );
}
else if(tipo === "wide"){
    return (
    
    <div className={styles.movieCarWrapper}>
      <BotonAtomico
        clase={`${styles.scrollButton} ${styles.left}`}
        dataTarget="#movieCar"
        dataSlide="prev"
        index={0}
        onSelect={() => scroll('prev')}
      />

      <div className={styles.movieCarContainer} ref={scrollRef}>
        {imagenes.map((img, i) => (
          <div key={i} className={styles.movieCarItem}>
            <MovieWidgetWide clase="MovieButton" img={img} />
          </div>
        ))}
      </div>

      <BotonAtomico
        clase={`${styles.scrollButton} ${styles.right}`}
        dataTarget="#movieCar"
        dataSlide="next"
        index={0}
        onSelect={() => scroll('next')}
      />
    </div>
  );
}
};

export default MovieCarousel;
