import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import arrival from "../../movies/inteligente/arrival.jpg";
import enemy from "../../movies/inteligente/enemy.jpg";
import inception from "../../movies/inteligente/inception.jpg";
import memento from "../../movies/inteligente/memento.jpg";
import mrnobody from "../../movies/inteligente/mrnobody.jpg";
import notesonascandal from "../../movies/inteligente/notesonascandal.jpg";
import thegirlwiththedragontattoo from "../../movies/inteligente/thegirlwiththedragontattoo.jpg";
import themaster from "../../movies/inteligente/themaster.jpg";
import thematrix from "../../movies/inteligente/thematrix.jpg";
import zodiac from "../../movies/inteligente/zodiac.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Arrival",
    image: arrival,
    director: "Denis Villeneuve",
    year: 2016,
    cast: "Amy Adams, Jeremy Renner, Forest Whitaker",
    synopsis: "Una lingüista intenta comunicarse con extraterrestres recién llegados a la Tierra."
  },
  {
    title: "Enemy",
    image: enemy,
    director: "Denis Villeneuve",
    year: 2013,
    cast: "Jake Gyllenhaal, Mélanie Laurent",
    synopsis: "Un profesor descubre a su doble exacto y se ve envuelto en un misterio obsesivo."
  },
  {
    title: "Inception",
    image: inception,
    director: "Christopher Nolan",
    year: 2010,
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    synopsis: "Un ladrón especializado en robar secretos del subconsciente se enfrenta a un último trabajo imposible."
  },
  {
    title: "Memento",
    image: memento,
    director: "Christopher Nolan",
    year: 2000,
    cast: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
    synopsis: "Un hombre con pérdida de memoria a corto plazo busca al asesino de su esposa, usando notas y tatuajes."
  },
  {
    title: "Mr. Nobody",
    image: mrnobody,
    director: "Jaco Van Dormael",
    year: 2009,
    cast: "Jared Leto, Sarah Polley, Diane Kruger",
    synopsis: "Explora la vida de Nemo Nobody y las distintas posibilidades que sus decisiones crean."
  },
  {
    title: "Notes on a Scandal",
    image: notesonascandal,
    director: "Richard Eyre",
    year: 2006,
    cast: "Cate Blanchett, Judi Dench",
    synopsis: "Una profesora tiene un affaire con un estudiante, y su secreto es manipulado por una colega obsesiva."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    image: thegirlwiththedragontattoo,
    director: "David Fincher",
    year: 2011,
    cast: "Daniel Craig, Rooney Mara",
    synopsis: "Un periodista y una hacker investigan la desaparición de una joven en una familia rica y oscura."
  },
  {
    title: "The Master",
    image: themaster,
    director: "Paul Thomas Anderson",
    year: 2012,
    cast: "Joaquin Phoenix, Philip Seymour Hoffman",
    synopsis: "La relación entre un líder carismático de culto y un hombre perturbado en la posguerra."
  },
  {
    title: "The Matrix",
    image: thematrix,
    director: "Lana y Lilly Wachowski",
    year: 1999,
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    synopsis: "Un hacker descubre que la realidad es una simulación y lidera la rebelión contra las máquinas."
  },
  {
    title: "Zodiac",
    image: zodiac,
    director: "David Fincher",
    year: 2007,
    cast: "Jake Gyllenhaal, Robert Downey Jr., Mark Ruffalo",
    synopsis: "Basada en hechos reales: la búsqueda de un asesino en serie que aterroriza San Francisco en los años 70."
  },
];

function Inteligente() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Inteligente</h1>
      <p>
        Razona cada cosa que encuentra en su camino, capaz de analizar y entender todo, incluso 
        dándole su impronta. Tiene una inteligencia creativa magistral, ademas, por a o por b,
        increiblemente al corto o largo plazo la vida le termina dando la razon, incluso cuando
        esta es impulsada unicamente por la intuicion. 
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

export default Inteligente;

