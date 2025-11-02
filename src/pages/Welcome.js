import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./Welcome.css";

// 🖼️ Importar fondos
import amorosa from "../backgrounds/amorosa.jpg";
import aventurera from "../backgrounds/aventurera.jpg";
import belleza from "../backgrounds/belleza.jpg";
import cinefila from "../backgrounds/cinefila.jpg";
import dramatica from "../backgrounds/dramatica.jpg";
import empatica from "../backgrounds/empatica.jpg";
import empoderada from "../backgrounds/empoderada.jpg";
import graciosa from "../backgrounds/graciosa.jpg";
import impredecible from "../backgrounds/impredecible.jpg";
import inteligente from "../backgrounds/inteligente.jpg";
import melomana from "../backgrounds/melomana.jpg";
import sonadora from "../backgrounds/sonadora.jpg";
import temeraria from "../backgrounds/temeraria.jpg";
import trabajadora from "../backgrounds/trabajadora.jpg";
import volatil from "../backgrounds/volatil.jpg";

// 🌸 Personalidades con imagen y ruta
const personalities = [
  { id: "amorosa", title: "Amorosa", image: amorosa },
  { id: "aventurera", title: "Aventurera", image: aventurera },
  { id: "belleza", title: "Belleza", image: belleza },
  { id: "cinefila", title: "Cinéfila", image: cinefila },
  { id: "dramatica", title: "Dramática", image: dramatica },
  { id: "empatica", title: "Empática", image: empatica },
  { id: "empoderada", title: "Empoderada", image: empoderada },
  { id: "graciosa", title: "Graciosa", image: graciosa },
  { id: "impredecible", title: "Impredecible", image: impredecible },
  { id: "inteligente", title: "Inteligente", image: inteligente },
  { id: "melomana", title: "Melómana", image: melomana },
  { id: "sonadora", title: "Soñadora", image: sonadora },
  { id: "temeraria", title: "Temeraria", image: temeraria },
  { id: "trabajadora", title: "Trabajadora", image: trabajadora },
  { id: "volatil", title: "Volátil", image: volatil },
];

function Welcome() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* 🪞 Tarjeta de bienvenida */}
      <div className="welcome-card">
        <h1>Bienvenida</h1>
        <p>
          Muchas veces el miedo al abandono nos hace pensar en por qué alguien
          podría irse o querría irse. Pero quiero que hoy mires desde otra perspectiva: todos
          los motivos por los que alguien querría quedarse.
        </p>
        <p>
          Sos una persona increible, y no existe una cifra con la que pueda enumerar 
          cada uno de tus atributos o aspectos especiales que te hacen ser quien sos, pero en
          esta ocasión voy a intentar destacar algunos.
        </p>
        <p>Estos son algunos de los motivos por los que las personas querrian permanencer a tu lado,
          no te definen, ni te describen, pero si estan presentes. Y por cada uno de ellos, pensé
          en peliculas que puedan sentirse parte de vos, y de esos rasgos tan lindos.
        </p>
        <p>
          Incluso cuando yo no esté presente, quiero que este espacio te
          recuerde lo valiosa que sos y lo mucho que importas. Espero que te guste y te sea util.
        </p>
        <h2>REBUILD: A LOT OF REASONS TO STAY</h2>
      </div>

      {/* Grid de rasgos */}
      <div className="traits-grid">
        {personalities.map((p) => (
          <div
            key={p.id}
            className={`trait-card trait-${p.id}`} // Clase específica por personalidad
            style={{
              backgroundImage: `url(${p.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => navigate(`/${p.id}`)}
          >
            <div className="overlay">
              <h2>{p.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;



