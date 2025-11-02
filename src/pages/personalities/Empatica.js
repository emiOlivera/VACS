import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import years12 from "../../movies/empatica/12yearsaslave.jpg";
import amonstercalls from "../../movies/empatica/amonstercalls.jpg";
import deadpoets from "../../movies/empatica/deadpoetssociety.jpg";
import lavieestbelle from "../../movies/empatica/lavieestbelle.jpg";
import philadelphia from "../../movies/empatica/philadelphia.jpg";
import stillalice from "../../movies/empatica/stillalice.jpg";
import floridaproject from "../../movies/empatica/thefloridaproject.jpg";
import greenmile from "../../movies/empatica/thegreenmile.jpg";
import pursuitofhappyness from "../../movies/empatica/thepursuitofhappyness.jpg";
import schindlerlist from "../../movies/empatica/theschlinderlist.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "12 Years a Slave",
    image: years12,
    director: "Steve McQueen",
    year: 2013,
    cast: "Chiwetel Ejiofor, Michael Fassbender, Lupita Nyong'o",
    synopsis: "La historia real de Solomon Northup, un hombre libre secuestrado y vendido como esclavo en Estados Unidos."
  },
  {
    title: "A Monster Calls",
    image: amonstercalls,
    director: "J.A. Bayona",
    year: 2016,
    cast: "Lewis MacDougall, Felicity Jones, Sigourney Weaver",
    synopsis: "Un niño enfrenta la enfermedad terminal de su madre con la ayuda de un monstruo que le cuenta historias."
  },
  {
    title: "Dead Poets Society",
    image: deadpoets,
    director: "Peter Weir",
    year: 1989,
    cast: "Robin Williams, Robert Sean Leonard",
    synopsis: "Un profesor inspira a sus estudiantes a vivir la vida con pasión y a seguir sus sueños."
  },
  {
    title: "La Vie est Belle",
    image: lavieestbelle,
    director: "Roberto Benigni",
    year: 1997,
    cast: "Roberto Benigni, Nicoletta Braschi",
    synopsis: "Un hombre usa su imaginación para proteger a su hijo de los horrores de un campo de concentración nazi."
  },
  {
    title: "Philadelphia",
    image: philadelphia,
    director: "Jonathan Demme",
    year: 1993,
    cast: "Tom Hanks, Denzel Washington",
    synopsis: "Un abogado con VIH enfrenta discriminación y lucha por justicia en su caso legal."
  },
  {
    title: "Still Alice",
    image: stillalice,
    director: "Richard Glatzer, Wash Westmoreland",
    year: 2014,
    cast: "Julianne Moore, Alec Baldwin",
    synopsis: "La historia de una mujer diagnosticada con Alzheimer temprano y cómo afecta su vida y la de su familia."
  },
  {
    title: "The Florida Project",
    image: floridaproject,
    director: "Sean Baker",
    year: 2017,
    cast: "Brooklynn Prince, Willem Dafoe",
    synopsis: "La vida de una niña y su madre viviendo en los márgenes de Disney World."
  },
  {
    title: "The Green Mile",
    image: greenmile,
    director: "Frank Darabont",
    year: 1999,
    cast: "Tom Hanks, Michael Clarke Duncan",
    synopsis: "Un guardia de prisión desarrolla una relación extraordinaria con un recluso que posee poderes sobrenaturales."
  },
  {
    title: "The Pursuit of Happyness",
    image: pursuitofhappyness,
    director: "Gabriele Muccino",
    year: 2006,
    cast: "Will Smith, Jaden Smith",
    synopsis: "Un hombre lucha contra la pobreza mientras intenta construir un futuro mejor para él y su hijo."
  },
  {
    title: "Schindler's List",
    image: schindlerlist,
    director: "Steven Spielberg",
    year: 1993,
    cast: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    synopsis: "La historia real de Oskar Schindler, quien salvó a más de mil judíos durante el Holocausto."
  },
];

function Empatica() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Empática</h1>
      <p>
        Si tuviera que morir por las personas que aprecia lo haría; es capaz de entender a niveles 
        inimaginables las penas y el dolor de otros, incluso en situaciones donde la otra persona
        es alguien totalmente insoportable. Una cualidad que ni yo soy capaz de tener.
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

export default Empatica;

