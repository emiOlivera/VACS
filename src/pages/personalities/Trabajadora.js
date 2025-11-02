import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import billyelliot from "../../movies/trabajadora/billyelliot.jpg";
import francesha from "../../movies/trabajadora/francesha.jpg";
import lacamarista from "../../movies/trabajadora/lacamarista.jpg";
import madmen from "../../movies/trabajadora/madmen.jpg";
import normarae from "../../movies/trabajadora/normarae.jpg";
import theassistant from "../../movies/trabajadora/theassistant.jpg";
import thedevilwearsprada from "../../movies/trabajadora/thedevilwearsprada.jpg";
import themachinist from "../../movies/trabajadora/themachinist.jpg";
import therewillbeblood from "../../movies/trabajadora/therewillbeblood.jpg";
import wildlife from "../../movies/trabajadora/wildlife.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Billy Elliot",
    image: billyelliot,
    director: "Stephen Daldry",
    year: 2000,
    cast: "Jamie Bell, Julie Walters",
    synopsis: "Un niño descubre su pasión por el ballet y lucha contra los prejuicios de su familia y comunidad."
  },
  {
    title: "Frances Ha",
    image: francesha,
    director: "Noah Baumbach",
    year: 2012,
    cast: "Greta Gerwig, Mickey Sumner",
    synopsis: "Una joven bailarina en Nueva York lucha por encontrar su lugar en la vida y en la amistad."
  },
  {
    title: "La Camarista",
    image: lacamarista,
    director: "Lila Avilés",
    year: 2018,
    cast: "Gabriela Cartol, Teresa Sánchez",
    synopsis: "Una camarista en un hotel de lujo enfrenta la rutina y la búsqueda de un mejor futuro."
  },
  {
    title: "Mad Men",
    image: madmen,
    director: "Matthew Weiner",
    year: 2007,
    cast: "Jon Hamm, Elisabeth Moss",
    synopsis: "Serie sobre ejecutivos de publicidad en los años 60, explorando trabajo, ambición y relaciones personales."
  },
  {
    title: "Norma Rae",
    image: normarae,
    director: "Martin Ritt",
    year: 1979,
    cast: "Sally Field, Ron Leibman",
    synopsis: "Una trabajadora lucha por sindicalizar a sus compañeros en una fábrica textil del sur de Estados Unidos."
  },
  {
    title: "The Assistant",
    image: theassistant,
    director: "Kitty Green",
    year: 2019,
    cast: "Julia Garner, Matthew Macfadyen",
    synopsis: "Una joven asistente en la industria del cine descubre la realidad de abuso de poder en su trabajo."
  },
  {
    title: "The Devil Wears Prada",
    image: thedevilwearsprada,
    director: "David Frankel",
    year: 2006,
    cast: "Meryl Streep, Anne Hathaway",
    synopsis: "Una joven asistente enfrenta los desafíos de trabajar para una poderosa editora de moda."
  },
  {
    title: "The Machinist",
    image: themachinist,
    director: "Brad Anderson",
    year: 2004,
    cast: "Christian Bale, Jennifer Jason Leigh",
    synopsis: "Un trabajador sufre de insomnio extremo mientras su salud mental y física se deteriora."
  },
  {
    title: "There Will Be Blood",
    image: therewillbeblood,
    director: "Paul Thomas Anderson",
    year: 2007,
    cast: "Daniel Day-Lewis, Paul Dano",
    synopsis: "La ambición y el trabajo duro de un hombre en la industria petrolera tienen consecuencias devastadoras."
  },
  {
    title: "Wildlife",
    image: wildlife,
    director: "Paul Dano",
    year: 2018,
    cast: "Carey Mulligan, Jake Gyllenhaal",
    synopsis: "Una familia enfrenta dificultades mientras el padre lucha por mantener su trabajo y su orgullo."
  },
];

function Trabajadora() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Trabajadora</h1>
      <p>
        Una persona enfocada y constante, que pone empeño en todo lo que hace.
      Tiene dedicación y disciplina que inspiran a quienes la rodean. Siempre busca
        crecer, aprender y aportar, sin dejar de valorar el esfuerzo de los demás. 
        Obsesiva con la puntualidad, banco pero quedate 5 minutos mas conmigo hdp si 
        es que no te aburriste de mi todavia jkajakja
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

export default Trabajadora;

