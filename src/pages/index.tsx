import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MovieButton from "@/components/atoms/MovieButton";
import OptionsMenu from "@/components/atoms/OptionMenu";
import MovieWidget from "@/components/molecules/MovieWidget";
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
            <h1> aqui ira el carrusel2</h1>
            <div className="row align-items-center gx-0">
              <div className="col">
                
                <MovieCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>


  );
}
