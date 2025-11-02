import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import diariosdemotocicleta from "../../movies/aventurera/diariosdemotocicleta.jpg";
import indianajones from "../../movies/aventurera/indianajones.jpg";
import jumanji from "../../movies/aventurera/jumanji.jpg";
import jurassicpark from "../../movies/aventurera/jurassicpark.jpg";
import lawrenceofarabia from "../../movies/aventurera/lawrenceofarabia.jpg";
import thelastofthemohicans from "../../movies/aventurera/thelastofthemohicans.jpg";
import themummy from "../../movies/aventurera/themummy.jpg";
import thereturnoftheking from "../../movies/aventurera/thereturnoftheking.jpg";
import thesecretlifeofwaltermitty from "../../movies/aventurera/thesecretlifeofwaltermitty.jpg";
import thewizardofoz from "../../movies/aventurera/thewizardofoz.jpg";

// 🎬 Datos reales de las películas
const movies = [
  {
    title: "Diarios de motocicleta",
    image: diariosdemotocicleta,
    director: "Walter Salles",
    year: 2004,
    cast: "Gael García Bernal, Rodrigo de la Serna",
    synopsis: "El joven Ernesto 'Che' Guevara emprende un viaje en motocicleta por Sudamérica con su amigo Alberto Granado, lo que transforma su visión del mundo."
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    image: indianajones,
    director: "Steven Spielberg",
    year: 1981,
    cast: "Harrison Ford, Karen Allen, Paul Freeman",
    synopsis: "El arqueólogo Indiana Jones viaja por el mundo en 1936 para recuperar el Arca de la Alianza antes que los nazis lo hagan."
  },
  {
    title: "Jumanji",
    image: jumanji,
    director: "Joe Johnston",
    year: 1995,
    cast: "Robin Williams, Kirsten Dunst, Bradley Pierce",
    synopsis: "Dos huérfanos encuentran un juego de mesa mágico que libera peligros de la jungla y deben terminarlo para detenerlo."
  },
  {
    title: "Jurassic Park",
    image: jurassicpark,
    director: "Steven Spielberg",
    year: 1993,
    cast: "Sam Neill, Laura Dern, Jeff Goldblum",
    synopsis: "Un parque temático de dinosaurios clonados se convierte en caos cuando las medidas de seguridad fallan."
  },
  {
    title: "Lawrence of Arabia",
    image: lawrenceofarabia,
    director: "David Lean",
    year: 1962,
    cast: "Peter O'Toole, Alec Guinness",
    synopsis: "La historia épica del militar y explorador T.E. Lawrence durante la Primera Guerra Mundial en Arabia."
  },
  {
    title: "The Last of the Mohicans",
    image: thelastofthemohicans,
    director: "Michael Mann",
    year: 1992,
    cast: "Daniel Day-Lewis, Madeleine Stowe, Russell Means",
    synopsis: "Amor y guerra en la frontera americana durante el siglo XVIII en la lucha entre británicos, franceses y nativos."
  },
  {
    title: "The Mummy",
    image: themummy,
    director: "Stephen Sommers",
    year: 1999,
    cast: "Brendan Fraser, Rachel Weisz, John Hannah",
    synopsis: "Un equipo accidental despierta a una momia antigua que busca venganza, generando caos en Egipto moderno."
  },
  {
    title: "The Return of the King",
    image: thereturnoftheking,
    director: "Peter Jackson",
    year: 2003,
    cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
    synopsis: "La batalla final por la Tierra Media llega a su épico desenlace, concluyendo la trilogía de El Señor de los Anillos."
  },
  {
    title: "The Secret Life of Walter Mitty",
    image: thesecretlifeofwaltermitty,
    director: "Ben Stiller",
    year: 2013,
    cast: "Ben Stiller, Kristen Wiig, Sean Penn",
    synopsis: "Un hombre ordinario emprende un viaje extraordinario lleno de aventuras para encontrar la fotografía final de la revista Life."
  },
  {
    title: "The Wizard of Oz",
    image: thewizardofoz,
    director: "Victor Fleming",
    year: 1939,
    cast: "Judy Garland, Frank Morgan, Ray Bolger",
    synopsis: "Dorothy es transportada a un mundo mágico y debe encontrar al Mago de Oz para regresar a casa, acompañada de sus inolvidables amigos."
  },
];

function Aventurera() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="personality-container">
      <h1>Aventurera</h1>
      <p>
        lo que se dice una "story teller", probablemente la persona con más historias por contar que puedas conocer: viajes, aventuras, 
        desdichas y alegrías, casi como si hubiera vivido varias vidas en una misma.
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

export default Aventurera;

