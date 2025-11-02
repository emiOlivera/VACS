import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../externalThings/vacs.png";
import clapperClosed from "../externalThings/clapper-closed.png";
import clapperOpen from "../externalThings/clapper-open.png";
import clapperSound from "../externalThings/Claqueta Efecto De Sonido  Clapperboard Sound Effect  FREE SFX.mp3";
import bgMusic from "../externalThings/Mia & Sebastian's Theme (arr. for Piano).mp3";

function Home() {
  const [closed, setClosed] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const musicRef = useRef(new Audio(bgMusic));
  const navigate = useNavigate();

  const handleClapperClick = () => {
    setClosed(true); // cambia la claqueta al estado "cerrado" inmediatamente

    const audio = new Audio(clapperSound);
    audio.playbackRate = 1.5; // sonido más rápido
    audio.play().catch(err => console.log("Error al reproducir el audio", err));

    // Esperamos a que el sonido empiece a reproducirse antes de navegar
    audio.onplaying = () => {
      setTimeout(() => {
        navigate("/welcome"); // navegar a la siguiente página
      }, 300); // 300ms después de iniciar el sonido
    };
  };

  const handleLogoClick = () => {
    if (!musicPlaying) {
      musicRef.current.loop = true;
      musicRef.current.play().catch(err => console.log("Error al reproducir la música", err));
      setMusicPlaying(true);
    }
  };

  return (
    <div className="home-container">
      <h1 className="welcome">Welcome to</h1>
      <img
        src={logo}
        alt="VACS"
        className="logo clickable-logo"
        onClick={handleLogoClick} // 🎵 inicia música
      />

      <div className="bottom-container">
        <div className="scene-text">Scene 1, Take 1</div>
        <img
          src={closed ? clapperClosed : clapperOpen}
          alt="Claqueta"
          className="clapper"
          onClick={handleClapperClick} // 🎬 sonido + animación + navegación
        />
      </div>
    </div>
  );
}

export default Home;

