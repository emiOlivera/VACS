import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import astarisborn1937 from "../../movies/cinefila/astarisborn1937.jpg";
import babylon from "../../movies/cinefila/babylon.jpg";
import birdman from "../../movies/cinefila/birdman.jpg";
import boogienights from "../../movies/cinefila/boogienights.jpg";
import cinemaparadiso from "../../movies/cinefila/cinemaparadiso.jpg";
import onceupontimeinhollywood from "../../movies/cinefila/onceupontimeinhollywood.jpg";
import singinintherain from "../../movies/cinefila/singinintherain.jpg";
import theartist from "../../movies/cinefila/theartist.jpg";
import thedisasterartist from "../../movies/cinefila/thedisasterartist.jpg";
import thefabelman from "../../movies/cinefila/thefabelman.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "A Star is Born (1937)",
    image: astarisborn1937,
    director: "William A. Wellman",
    year: 1937,
    cast: "Janet Gaynor, Fredric March",
    synopsis: "Una joven estrella del cine y su ascenso junto a un actor ya consagrado, explorando amor y tragedia."
  },
  {
    title: "Babylon",
    image: babylon,
    director: "Damien Chazelle",
    year: 2022,
    cast: "Brad Pitt, Margot Robbie, Diego Calva",
    synopsis: "La historia del auge y caída de estrellas en la era dorada de Hollywood, con excesos, ambición y glamour."
  },
  {
    title: "Birdman",
    image: birdman,
    director: "Alejandro G. Iñárritu",
    year: 2014,
    cast: "Michael Keaton, Edward Norton, Emma Stone",
    synopsis: "Un actor famoso por su pasado heroico intenta recuperar relevancia artística con un montaje teatral complejo."
  },
  {
    title: "Boogie Nights",
    image: boogienights,
    director: "Paul Thomas Anderson",
    year: 1997,
    cast: "Mark Wahlberg, Julianne Moore, Burt Reynolds",
    synopsis: "Un joven se convierte en estrella del cine para adultos en los años 70, explorando fama y decadencia."
  },
  {
    title: "Cinema Paradiso",
    image: cinemaparadiso,
    director: "Giuseppe Tornatore",
    year: 1988,
    cast: "Philippe Noiret, Salvatore Cascio",
    synopsis: "Un niño desarrolla un vínculo con un proyeccionista de cine, recordando cómo el cine moldea vidas y memorias."
  },
  {
    title: "Once Upon a Time in Hollywood",
    image: onceupontimeinhollywood,
    director: "Quentin Tarantino",
    year: 2019,
    cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
    synopsis: "Un actor y su doble de acción navegan la industria cinematográfica de los años 60 en Los Ángeles."
  },
  {
    title: "Singin' in the Rain",
    image: singinintherain,
    director: "Gene Kelly, Stanley Donen",
    year: 1952,
    cast: "Gene Kelly, Debbie Reynolds, Donald O'Connor",
    synopsis: "Durante la transición al cine sonoro, actores enfrentan desafíos cómicos y románticos mientras celebran la música."
  },
  {
    title: "The Artist",
    image: theartist,
    director: "Michel Hazanavicius",
    year: 2011,
    cast: "Jean Dujardin, Bérénice Bejo",
    synopsis: "Un actor del cine mudo enfrenta la llegada del cine sonoro y los cambios en su carrera y vida personal."
  },
  {
    title: "The Disaster Artist",
    image: thedisasterartist,
    director: "James Franco",
    year: 2017,
    cast: "James Franco, Dave Franco",
    synopsis: "La historia de la creación de la película más infame de la historia, 'The Room', y la amistad detrás de su director."
  },
  {
    title: "The Fabelmans",
    image: thefabelman,
    director: "Steven Spielberg",
    year: 2022,
    cast: "Gabriel LaBelle, Michelle Williams, Paul Dano",
    synopsis: "Una semi-autobiografía de Spielberg sobre su infancia, la familia y su primer amor por el cine."
  },
];

function Cinefila() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Cinéfila</h1>
      <p>
        Su mayor amor es el 7mo arte. Su meta, su vida y su futuro estan conectados con el cine,
        conoce y aprecia cada plano, los tiempos y los detalles de cualquier guión. 
        Es el cine hecho mujer.
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

export default Cinefila;
