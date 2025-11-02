import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import angry from "../../movies/dramatica/12angrymen.jpg";
import childrenofmen from "../../movies/dramatica/childrenofmen.jpg";
import drivemycar from "../../movies/dramatica/drivemycar.jpg";
import eyeswideshut from "../../movies/dramatica/eyeswideshut.jpg";
import manchesterbythesea from "../../movies/dramatica/manchesterbythesea.jpg";
import mysticriver from "../../movies/dramatica/mysticriver.jpg";
import persona from "../../movies/dramatica/persona.jpg";
import thehunt from "../../movies/dramatica/thehunt.jpg";
import thevirginsuicides from "../../movies/dramatica/thevirginsuicides.jpg";
import todosobremimadre from "../../movies/dramatica/todosobremimadre.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "12 Angry Men",
    image: angry,
    director: "Sidney Lumet",
    year: 1957,
    cast: "Henry Fonda, Lee J. Cobb",
    synopsis: "Doce jurados deliberan sobre la culpabilidad de un joven acusado de asesinato, revelando prejuicios y tensiones."
  },
  {
    title: "Children of Men",
    image: childrenofmen,
    director: "Alfonso Cuarón",
    year: 2006,
    cast: "Clive Owen, Julianne Moore, Michael Caine",
    synopsis: "En un futuro distópico donde la humanidad es infértil, un hombre debe proteger a la primera mujer embarazada en décadas."
  },
  {
    title: "Drive My Car",
    image: drivemycar,
    director: "Ryusuke Hamaguchi",
    year: 2021,
    cast: "Hidetoshi Nishijima, Toko Miura",
    synopsis: "Un actor-director reflexiona sobre la pérdida y el amor mientras ensaya una obra de teatro en Hiroshima."
  },
  {
    title: "Eyes Wide Shut",
    image: eyeswideshut,
    director: "Stanley Kubrick",
    year: 1999,
    cast: "Tom Cruise, Nicole Kidman",
    synopsis: "Un médico explora los límites del deseo y los secretos ocultos de la élite neoyorquina."
  },
  {
    title: "Manchester by the Sea",
    image: manchesterbythesea,
    director: "Kenneth Lonergan",
    year: 2016,
    cast: "Casey Affleck, Michelle Williams",
    synopsis: "Un hombre debe enfrentar su pasado y la tragedia familiar tras la muerte de su hermano."
  },
  {
    title: "Mystic River",
    image: mysticriver,
    director: "Clint Eastwood",
    year: 2003,
    cast: "Sean Penn, Tim Robbins, Kevin Bacon",
    synopsis: "Tres amigos de la infancia se reencuentran tras un asesinato que desentierra secretos y traumas."
  },
  {
    title: "Persona",
    image: persona,
    director: "Ingmar Bergman",
    year: 1966,
    cast: "Bibi Andersson, Liv Ullmann",
    synopsis: "Una actriz queda muda y desarrolla una relación intensa y psicológicamente compleja con su enfermera."
  },
  {
    title: "The Hunt",
    image: thehunt,
    director: "Thomas Vinterberg",
    year: 2012,
    cast: "Mads Mikkelsen, Thomas Bo Larsen",
    synopsis: "Un hombre es falsamente acusado de abuso infantil, desatando paranoia y conflicto en su comunidad."
  },
  {
    title: "The Virgin Suicides",
    image: thevirginsuicides,
    director: "Sofia Coppola",
    year: 1999,
    cast: "Kirsten Dunst, James Woods",
    synopsis: "Cinco hermanas viven bajo estricta vigilancia parental, lo que impacta a los chicos del vecindario que las observan."
  },
  {
    title: "Todo Sobre Mi Madre",
    image: todosobremimadre,
    director: "Pedro Almodóvar",
    year: 1999,
    cast: "Cecilia Roth, Marisa Paredes",
    synopsis: "Tras la muerte de su hijo, una madre busca al padre del niño y se enfrenta a encuentros inesperados con mujeres fuertes."
  },
];

function Dramatica() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Dramática</h1>
      <p>
        Casi como si viviera en una película, romantiza cada pequeño detalle de su vida, 
        haciendo de la vida de los que la rodean, incluyendo la suya, más entretenida.
        Que soporte el que tenga que soportar, una mujer criada a gossip girl pa.
      </p>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.title} className="movie-card">
            <div className="movie-card-inner">
              <div className="movie-card-front">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
              </div>
              <div className="movie-card-back">
                <h3>{movie.title}</h3>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Año:</strong> {movie.year}</p>
                <p><strong>Reparto:</strong> {movie.cast}</p>
                <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dramatica;
