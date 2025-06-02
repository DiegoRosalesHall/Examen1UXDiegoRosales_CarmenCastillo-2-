import { useState } from "react";
import Poster from "../atoms/posterCar";
import Boton from "../atoms/button";
import BotonProgreso from "../atoms/botonProgreso";
import Descripcion from "../molecules/descripcion";
import styles from './Carrusel.module.css';

const Carrusel = () => {
    const [indice, setIndice] = useState(0);
    const peliculas = [{ src: "../img/carrusel1.jpg", titulo: "../img/cartitulo1.webp", descripcion: "\n16+   4 temporadas \nHacks explora la relación entre Deborah Vance, una legendaria \ncomediante de Las Vegas, y una joven desconocida con mucho que decir.", textbtn:"Ir a la serie" }, 
        { src: "../img/carrusel2.webp", titulo: "../img/cartitulo2.webp", descripcion: "\n18+   2 temporadas \nSerie posapocalíptica inspirada en el aclamado videojuego que sigue \nla brutal y desgarradora travesía de un hombre cínico y una joven de 14 años.", textbtn:"Ir a la serie" }, 
        { src: "../img/carrusel3.webp", titulo: "../img/cartitulo3.webp", descripcion: "\n7+   2024 \nLa aventura épica de un robot que, tras naufragar en una \nisla deshabitada, aprende a sobrevivir relacionándose con la fauna local.", textbtn:"Ir a la película" }, 
        { src: "../img/carrusel4.webp", titulo: "../img/cartitulo4.webp", descripcion: "\n18+   2011 \nEn la aterradora quinta entrega de la saga, la muerte \nvuelve para cobrar la vida de los supervivientes del colapso de un puente.", textbtn:"Ir a la película" }, 
        { src: "../img/carrusel5.webp", titulo: "../img/cartitulo5.webp", descripcion: "\n16+   2024 \nUn equipo de buceadores se enfrenta a un tiburón toro en las \nprofundidades y a un grupo de despiadados criminales en la superficie.", textbtn:"Ir a la película" }, 
        { src: "../img/carrusel6.webp", titulo: "../img/cartitulo6.webp", descripcion: "\n13+   2025 \nEn medio de una crisis internacional, cuatro magnates de la \ntecnología buscan la forma de usar el caos para su propio beneficio.", textbtn:"Ir a la película" } ];

    const siguiente = () => {
        if (indice < peliculas.length - 1) {
            setIndice(indice + 1);
        }
    };

    const anterior = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
    };

    return (//OTRA VEZ {`carousel slide ${styles.carousel}`}
        <div id="carouselExampleDark" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
            {/*PROGRESOS*/}
            <div className="carousel-indicators">
                {peliculas.map((_, i) => (
                    <BotonProgreso
                        key={i}
                        indice={i}
                        activo={i === indice}
                        dataTarget="#carouselExampleDark"
                        onSelect={setIndice}
                    />
                ))}
            </div>

            {/*CARRUSEL*/}
            <div className="carousel-inner">
                {peliculas.map((pelicula, i) => (
                    <div key={i} className={`carousel-item ${i === indice ? "active" : ""}`}>
                        <Poster src={pelicula.src} alt={pelicula.titulo} />
                        <Descripcion src={pelicula.titulo} descripcion={pelicula.descripcion} textbtn={pelicula.textbtn} />                        
                    </div>
                ))}
            </div>

            <Boton clase={`carousel-control-prev ${styles.carouselcontrolpre}`} dataTarget="#carouselExampleDark" dataSlide="prev" index={indice} onSelect={anterior} />
            <Boton clase={`carousel-control-next ${styles.carouselcontrolsig}`} dataTarget="#carouselExampleDark" dataSlide="next" index={indice} onSelect={siguiente} />

        </div>
    );
};

export default Carrusel;