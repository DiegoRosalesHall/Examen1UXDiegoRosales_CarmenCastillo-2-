import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MovieButton from "@/components/atoms/MovieButton";
import MovieButtonTop from "@/components/atoms/MovieButtonTop";
import OptionsMenu from "@/components/atoms/OptionMenu";
import MovieWidget from "@/components/molecules/MovieWidget";
import MovieWidgetTop from "@/components/molecules/MovieWidgetTop";
import Navbar from "@/components/molecules/Navbar";
import style from "@/components/molecules/Navbar.module.css";
import Carrusel from "@/components/organisms/carrusel";
import MovieCarousel from "@/components/organisms/MovieCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  //BackEnd <MovieWidget clase="MovieButton" img="/img/gumball.webp" />
  useEffect(() => {
    //import('bootstrap');
  }, []);

  const [hover, setHover] = useState(false);


  const Destacados = [
    "../img/dest1.webp",
    '../img/dest2.webp',
    '../img/dest3.webp',
    '../img/dest4.webp',
    '../img/dest5.webp',
    '../img/dest6.webp',
    '../img/dest7.webp',
    '../img/dest8.webp',
    '../img/dest9.webp',
    '../img/dest10.webp',
  ];
  const SoloParaTi = [
    '../img/dest11.webp',
    '../img/dest12.webp',
    '../img/dest13.webp',
    '../img/dest14.webp',
    '../img/dest15.webp',
    '../img/dest16.webp',
    '../img/dest17.webp',
    '../img/dest18.jpeg',
    '../img/dest19.webp',
    '../img/dest20.webp',
  ];
  const continuarViendo = [
    '../img/continuarviendo1.webp',
    '../img/continuarviendo2.webp'
  ];
  const top10 = [
     '../img/dest4.webp',
     '../img/dest11.webp',
     '../img/solo7.webp',
     '../img/dest1.webp',
     '../img/solo8.webp',
     '../img/solo15.webp',
     '../img/solo9.webp',
     '../img/dest12.webp',
     '../img/solo18.webp',
     '../img/solo10.webp',
  ];
  const topIcons = [
    '../img/1.webp',
    '../img/2.webp',
    '../img/3.webp',
    '../img/4.webp',
    '../img/5.webp',
    '../img/6.webp',
    '../img/7.webp',
    '../img/8.webp',
    '../img/9.webp',
    '../img/10.webp',
  ]

  return (
    //FrontEnd

    <center>

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/img/fondo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />

      <div
        className="container-fluid p-0 m-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="row align-items-center gx-0" style={{ padding: "10px 0" }}>
          <div className="col-6 col-lg-4 d-flex justify-content-start ps-4 order-1 order-lg-1">
            <img src="/img/logomax.png" alt="Logo" style={{ height: "40px" }} />
          </div>
          <div className="col-6 col-lg-4 d-flex justify-content-end pe-4 order-2 order-lg-3">
            <h1 style={{ color: "white", fontSize: "1.2rem", margin: 0 }}>algo mas</h1>
          </div>
          <div
            className="col-12 col-lg-4 d-flex justify-content-center order-3 order-lg-2"
            style={{ marginTop: '5px', color: "white", fontWeight: "bold" }}
          >
            <Navbar />
          </div>
        </div>
      </div>


      <div
        className="container-fluid p-0 m-0"
        style={{ paddingTop: "80px" }}
      >
        <div className="row align-items-center gx-0">
          <Carrusel />
        </div>
        <div className="row align-items-center gx-0">
          <div >
            <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', fontWeight: 'bold', color: 'white', textAlign:"left", paddingLeft:"1vw", paddingTop:"1vw" }}>Destacados </h2>
              <div className="col">
                <MovieCarousel imagenes={Destacados} tipo="normal" top={top10} />
              </div>
          </div>
        </div>
        <div className="row align-items-center gx-0">
          <div >
            <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', fontWeight: 'bold', color: 'white', textAlign:"left", paddingLeft:"1vw" }}>Solo para ti </h2>
              <div className="col">
                <MovieCarousel imagenes={SoloParaTi} tipo="normal" top={top10}/>
              </div>
          </div>
        </div>
        <div className="row align-items-center gx-0">
          <div >
            <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', fontWeight: 'bold', color: 'white', textAlign:"left", paddingLeft:"1vw" }}> Continuar viendo </h2>
              <div className="col">
                <MovieCarousel imagenes={continuarViendo} tipo="wide" top={top10}/>
              </div>
          </div>
        </div>
        <div className="row align-items-center gx-0">
          <div className="col-6 col-lg-4 d-flex justify-content-start ps-4 order-1 order-lg-1">
            <img src="/img/top10.webp" alt="Logo" style={{ width :"600px", height: "200px" }} />
          </div>
        </div>
        <div className="row align-items-center gx-0">
          <div>
            
              <MovieCarousel imagenes = {top10} tipo = "top" top={topIcons}   />
          </div>
        </div>
      </div>
    </center>


  );
}
