import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import blackswan from "../../movies/sonadora/blackswan.jpg";
import invictus from "../../movies/sonadora/invictus.jpg";
import littlemisssunshine from "../../movies/sonadora/littlemisssunshine.jpg";
import milliondollarbaby from "../../movies/sonadora/milliondollarbaby.jpg";
import moneyball from "../../movies/sonadora/moneyball.jpg";
import slumdogmillionaire from "../../movies/sonadora/slumdogmillionaire.jpg";
import thedanishgirl from "../../movies/sonadora/thedanishgirl.jpg";
import theshawshankredemption from "../../movies/sonadora/theshawshankredemption.jpg";
import thesocialnetwork from "../../movies/sonadora/thesocialnetwork.jpg";
import thetheoryofeverything from "../../movies/sonadora/thetheoryofeverything.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Black Swan",
    image: blackswan,
    director: "Darren Aronofsky",
    year: 2010,
    cast: "Natalie Portman, Mila Kunis, Vincent Cassel",
    synopsis: "Una bailarina lucha por la perfección en su papel principal y se enfrenta a su lado oscuro."
  },
  {
    title: "Invictus",
    image: invictus,
    director: "Clint Eastwood",
    year: 2009,
    cast: "Morgan Freeman, Matt Damon",
    synopsis: "La historia de cómo Nelson Mandela usó el rugby para unir a Sudáfrica tras el apartheid."
  },
  {
    title: "Little Miss Sunshine",
    image: littlemisssunshine,
    director: "Jonathan Dayton, Valerie Faris",
    year: 2006,
    cast: "Steve Carell, Toni Collette, Abigail Breslin",
    synopsis: "Una familia disfuncional viaja a un concurso de belleza infantil, enfrentando sus conflictos."
  },
  {
    title: "Million Dollar Baby",
    image: milliondollarbaby,
    director: "Clint Eastwood",
    year: 2004,
    cast: "Hilary Swank, Clint Eastwood, Morgan Freeman",
    synopsis: "Una joven boxeadora lucha por alcanzar sus sueños mientras forma un vínculo con su entrenador."
  },
  {
    title: "Moneyball",
    image: moneyball,
    director: "Bennett Miller",
    year: 2011,
    cast: "Brad Pitt, Jonah Hill",
    synopsis: "El gerente general de un equipo de béisbol revoluciona el deporte usando estadísticas."
  },
  {
    title: "Slumdog Millionaire",
    image: slumdogmillionaire,
    director: "Danny Boyle",
    year: 2008,
    cast: "Dev Patel, Freida Pinto",
    synopsis: "Un joven de los barrios bajos de Mumbai participa en un concurso televisivo para cambiar su vida."
  },
  {
    title: "The Danish Girl",
    image: thedanishgirl,
    director: "Tom Hooper",
    year: 2015,
    cast: "Eddie Redmayne, Alicia Vikander",
    synopsis: "La historia real de Lili Elbe, una de las primeras personas en someterse a una cirugía de reasignación de sexo."
  },
  {
    title: "The Shawshank Redemption",
    image: theshawshankredemption,
    director: "Frank Darabont",
    year: 1994,
    cast: "Tim Robbins, Morgan Freeman",
    synopsis: "Un hombre injustamente encarcelado forma una amistad duradera mientras busca la redención."
  },
  {
    title: "The Social Network",
    image: thesocialnetwork,
    director: "David Fincher",
    year: 2010,
    cast: "Jesse Eisenberg, Andrew Garfield",
    synopsis: "La historia de la creación de Facebook y los conflictos legales y personales de sus fundadores."
  },
  {
    title: "The Theory of Everything",
    image: thetheoryofeverything,
    director: "James Marsh",
    year: 2014,
    cast: "Eddie Redmayne, Felicity Jones",
    synopsis: "La vida y carrera del físico Stephen Hawking, y su relación con Jane Wilde."
  },
];

function Sonadora() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Soñadora</h1>
      <p>
        No solo literalmente soñadora, ya cada noche es una nueva aventura dentro de su mente. Busca 
        crecer, busca sus propias metas y ayuda a otros a buscar las suyas. Sabe bien que es lo que quiere
        y lo que busca lograr, se conoce muy bien, y en algun momento va a entrar a esta pagina de mierda
        habiendo logrado todo lo que se propuso. Podria apostar mi vida en eso.
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

export default Sonadora;

