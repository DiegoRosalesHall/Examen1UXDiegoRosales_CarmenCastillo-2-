import React, { useState, useRef } from 'react';
import MovieWidget from '../molecules/MovieWidget';
import BotonAtomico from '../atoms/button';
import styles from './MovieCarousel.module.css';

const MovieCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    { img: '../img/dest1.webp' },
    { img: '../img/dest2.webp' },
    { img: '../img/dest3.webp' },
    { img: '../img/dest4.webp' },
    { img: '../img/dest5.webp' },
    { img: '../img/dest6.webp' },
    { img: '../img/dest7.webp' },
    { img: '../img/dest8.webp' },
    { img: '../img/dest9.webp' },
    { img: '../img/dest10.webp' },
    { img: '../img/dest11.webp' },
    { img: '../img/dest12.webp' },
    { img: '../img/dest13.webp' },
    { img: '../img/dest14.webp' },
    { img: '../img/dest15.webp' },
    { img: '../img/dest16.webp' },
    { img: '../img/dest17.webp' },
    { img: '../img/dest18.jpeg' },
    { img: '../img/dest19.webp' },
    { img: '../img/dest20.webp' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === "prev" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    
    <div className="movieCar-wrapper" >
      <BotonAtomico clase={` ${styles.scrollButton}`} dataTarget="#movieCar-conten" dataSlide="prev"index={0}onSelect={() => scroll("prev")}
      />
      <div className="movieCar-container" ref={scrollRef}>
        {movies.map((movie, i) => (
          <div key={i} className="movieCar-item">
            <MovieWidget clase="MovieButton" img={movie.img} />
          </div>
        ))}
      </div>

      <BotonAtomico clase={` ${styles.scrollButton}`} dataTarget="#movieCar-conten" dataSlide="next" index={0} onSelect={() => scroll("next")}
      />
    </div>
  );
};

export default MovieCarousel;