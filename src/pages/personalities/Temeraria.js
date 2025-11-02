import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import cuandoacechalamaldad from "../../movies/temeraria/cuandoacechalamaldad.jpg";
import hereditary from "../../movies/temeraria/hereditary.jpg";
import lesdiaboliques from "../../movies/temeraria/lesdiaboliques.jpg";
import possession from "../../movies/temeraria/possession.jpg";
import psycho from "../../movies/temeraria/psycho.jpg";
import scream from "../../movies/temeraria/scream.jpg";
import theexorcist from "../../movies/temeraria/theexorcist.jpg";
import theothers from "../../movies/temeraria/theothers.jpg";
import theshining from "../../movies/temeraria/theshining.jpg";
import thesilencesofthelambs from "../../movies/temeraria/thesilenceofthelambs.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Cuando Acecha la Maldad",
    image: cuandoacechalamaldad,
    director: "Robert Wise",
    year: 1961,
    cast: "Bette Davis, Joan Crawford",
    synopsis: "Dos mujeres conspiran para asesinar al esposo de una de ellas en un colegio interno."
  },
  {
    title: "Hereditary",
    image: hereditary,
    director: "Ari Aster",
    year: 2018,
    cast: "Toni Collette, Gabriel Byrne",
    synopsis: "Una familia comienza a descubrir secretos oscuros tras la muerte de la matriarca."
  },
  {
    title: "Les Diaboliques",
    image: lesdiaboliques,
    director: "Henri-Georges Clouzot",
    year: 1955,
    cast: "Simone Signoret, Véra Clouzot",
    synopsis: "La esposa y la amante de un hombre planean matarlo, pero las cosas no salen como esperan."
  },
  {
    title: "Possession",
    image: possession,
    director: "Andrzej Żuławski",
    year: 1981,
    cast: "Isabelle Adjani, Sam Neill",
    synopsis: "Un matrimonio se desmorona mientras la esposa se involucra en eventos sobrenaturales."
  },
  {
    title: "Psycho",
    image: psycho,
    director: "Alfred Hitchcock",
    year: 1960,
    cast: "Anthony Perkins, Janet Leigh",
    synopsis: "Un crimen en un motel aislado revela secretos aterradores de su dueño."
  },
  {
    title: "Scream",
    image: scream,
    director: "Wes Craven",
    year: 1996,
    cast: "Neve Campbell, Courteney Cox",
    synopsis: "Un asesino enmascarado aterroriza a un pequeño pueblo siguiendo reglas de películas de terror."
  },
  {
    title: "The Exorcist",
    image: theexorcist,
    director: "William Friedkin",
    year: 1973,
    cast: "Ellen Burstyn, Max von Sydow",
    synopsis: "Una joven es poseída por un demonio, y dos sacerdotes intentan exorcizarla."
  },
  {
    title: "The Others",
    image: theothers,
    director: "Alejandro Amenábar",
    year: 2001,
    cast: "Nicole Kidman, Fionnula Flanagan",
    synopsis: "Una madre vive en una casa aislada con sus hijos fotosensibles, mientras sucesos extraños ocurren."
  },
  {
    title: "The Shining",
    image: theshining,
    director: "Stanley Kubrick",
    year: 1980,
    cast: "Jack Nicholson, Shelley Duvall",
    synopsis: "Un hombre y su familia se aíslan en un hotel embrujado durante el invierno, con consecuencias terribles."
  },
  {
    title: "The Silence of the Lambs",
    image: thesilencesofthelambs,
    director: "Jonathan Demme",
    year: 1991,
    cast: "Jodie Foster, Anthony Hopkins",
    synopsis: "Una joven agente del FBI busca la ayuda de un asesino encarcelado para atrapar a otro criminal."
  },
];

function Temeraria() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Temeraria</h1>
      <p>
        No le tiene miedo a nada, a diferencia de mi. Bien podria aparecerse el 
        diablo que lo re cagaria a puteadas y le haria bullying, es la "final girl"
        de las peliculas de terror.
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

export default Temeraria;
