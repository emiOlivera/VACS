import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import emile from "../../movies/melomana/8mile.jpg";
import acrosstheuniverse from "../../movies/melomana/acrosstheuniverse.jpg";
import betterman from "../../movies/melomana/betterman.jpg";
import hedwigandtheangryinch from "../../movies/melomana/hedwigandtheangryinch.jpg";
import lalaland from "../../movies/melomana/lalaland.jpg";
import rocketman from "../../movies/melomana/rocketman.jpg";
import schoolofrock from "../../movies/melomana/schoolofrock.jpg";
import tar from "../../movies/melomana/tar.jpg";
import thegreatestshowman from "../../movies/melomana/thegreatestshowman.jpg";
import whiplash from "../../movies/melomana/whiplash.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "8 Mile",
    image: emile,
    director: "Curtis Hanson",
    year: 2002,
    cast: "Eminem, Kim Basinger, Brittany Murphy",
    synopsis: "Un joven rapero lucha por hacerse un lugar en la escena del hip-hop de Detroit."
  },
  {
    title: "Across the Universe",
    image: acrosstheuniverse,
    director: "Julie Taymor",
    year: 2007,
    cast: "Evan Rachel Wood, Jim Sturgess",
    synopsis: "Un romance musical ambientado en la década de los 60 con canciones de The Beatles."
  },
  {
    title: "Betterman",
    image: betterman,
    director: "Yasuhiro Yoshiura",
    year: 2002,
    cast: "Varios actores (anime)",
    synopsis: "Una historia animada sobre identidad, humanidad y tecnología."
  },
  {
    title: "Hedwig and the Angry Inch",
    image: hedwigandtheangryinch,
    director: "John Cameron Mitchell",
    year: 2001,
    cast: "John Cameron Mitchell, Miriam Shor",
    synopsis: "Un cantante transgénero de rock viaja con su banda mientras narra su vida y transformaciones."
  },
  {
    title: "La La Land",
    image: lalaland,
    director: "Damien Chazelle",
    year: 2016,
    cast: "Ryan Gosling, Emma Stone",
    synopsis: "Un músico y una aspirante a actriz luchan por alcanzar sus sueños en Los Ángeles mientras se enamoran."
  },
  {
    title: "Rocketman",
    image: rocketman,
    director: "Dexter Fletcher",
    year: 2019,
    cast: "Taron Egerton, Jamie Bell, Richard Madden",
    synopsis: "La biografía musical de Elton John, desde sus inicios hasta la fama mundial."
  },
  {
    title: "School of Rock",
    image: schoolofrock,
    director: "Richard Linklater",
    year: 2003,
    cast: "Jack Black, Joan Cusack",
    synopsis: "Un músico desempleado se hace pasar por profesor y enseña rock a un grupo de niños."
  },
  {
    title: "Tár",
    image: tar,
    director: "Todd Field",
    year: 2022,
    cast: "Cate Blanchett, Noémie Merlant",
    synopsis: "La historia de una directora de orquesta que enfrenta desafíos profesionales y personales."
  },
  {
    title: "The Greatest Showman",
    image: thegreatestshowman,
    director: "Michael Gracey",
    year: 2017,
    cast: "Hugh Jackman, Zac Efron, Michelle Williams",
    synopsis: "La vida de P. T. Barnum y la creación de un espectáculo que capturó la imaginación del mundo."
  },
  {
    title: "Whiplash",
    image: whiplash,
    director: "Damien Chazelle",
    year: 2014,
    cast: "Miles Teller, J.K. Simmons",
    synopsis: "Un joven baterista busca la perfección bajo la exigente tutela de su implacable instructor."
  },
];

function Melomana() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Melómana</h1>
      <p>
        Gran conocedora de muchas de las mejores bandas de la historia y de la actualidad, con un 
        gusto musical exquisito. Fanatica del pop, pero no se encasilla en ningun genero, multifacetica.
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

export default Melomana;
