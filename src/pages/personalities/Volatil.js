import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import _1917 from "../../movies/volatil/1917.jpg";
import apocalypsenow from "../../movies/volatil/apocalypsenow.jpg";
import blackhawkdown from "../../movies/volatil/blackhawkdown.jpg";
import district9 from "../../movies/volatil/district9.jpg";
import dunkirk from "../../movies/volatil/dunkirk.jpg";
import fullmetaljacket from "../../movies/volatil/fullmetaljacket.jpg";
import iluminadosporelfuego from "../../movies/volatil/iluminadosporelfuego.jpg";
import ingloriousbasterds from "../../movies/volatil/ingloriousbasterds.jpg";
import pathsofglory from "../../movies/volatil/pathsofglory.jpg";
import savingprivateryan from "../../movies/volatil/savingprivateryan.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "1917",
    image: _1917,
    director: "Sam Mendes",
    year: 2019,
    cast: "George MacKay, Dean-Charles Chapman",
    synopsis: "Dos soldados británicos deben entregar un mensaje crucial para salvar a 1600 hombres durante la Primera Guerra Mundial."
  },
  {
    title: "Apocalypse Now",
    image: apocalypsenow,
    director: "Francis Ford Coppola",
    year: 1979,
    cast: "Martin Sheen, Marlon Brando",
    synopsis: "Un capitán estadounidense es enviado a asesinar a un coronel renegado durante la Guerra de Vietnam."
  },
  {
    title: "Black Hawk Down",
    image: blackhawkdown,
    director: "Ridley Scott",
    year: 2001,
    cast: "Josh Hartnett, Ewan McGregor",
    synopsis: "La historia real de una operación militar en Mogadiscio que sale terriblemente mal."
  },
  {
    title: "District 9",
    image: district9,
    director: "Neill Blomkamp",
    year: 2009,
    cast: "Sharlto Copley, Jason Cope",
    synopsis: "Alienígenas son refugiados en Sudáfrica y un hombre se ve envuelto en un conflicto inesperado."
  },
  {
    title: "Dunkirk",
    image: dunkirk,
    director: "Christopher Nolan",
    year: 2017,
    cast: "Fionn Whitehead, Tom Glynn-Carney",
    synopsis: "La evacuación de soldados británicos y aliados de Dunkerque durante la Segunda Guerra Mundial."
  },
  {
    title: "Full Metal Jacket",
    image: fullmetaljacket,
    director: "Stanley Kubrick",
    year: 1987,
    cast: "Matthew Modine, R. Lee Ermey",
    synopsis: "La brutal experiencia de entrenamiento militar y la guerra de Vietnam."
  },
  {
    title: "Iluminados por el Fuego",
    image: iluminadosporelfuego,
    director: "Tristán Bauer",
    year: 2005,
    cast: "Gastón Pauls, Pablo Ribera",
    synopsis: "Veteranos de la Guerra de Malvinas enfrentan recuerdos traumáticos y la búsqueda de redención."
  },
  {
    title: "Inglorious Basterds",
    image: ingloriousbasterds,
    director: "Quentin Tarantino",
    year: 2009,
    cast: "Brad Pitt, Mélanie Laurent",
    synopsis: "Un grupo de soldados judíos planea asesinar líderes nazis durante la ocupación de Francia."
  },
  {
    title: "Paths of Glory",
    image: pathsofglory,
    director: "Stanley Kubrick",
    year: 1957,
    cast: "Kirk Douglas, Ralph Meeker",
    synopsis: "Oficiales franceses defienden la moral de sus hombres en la Primera Guerra Mundial frente a decisiones militares injustas."
  },
  {
    title: "Saving Private Ryan",
    image: savingprivateryan,
    director: "Steven Spielberg",
    year: 1998,
    cast: "Tom Hanks, Matt Damon",
    synopsis: "Un escuadrón debe rescatar a un paracaidista durante la Segunda Guerra Mundial tras la muerte de sus hermanos."
  },
];

function Volatil() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Volátil</h1>
      <p>
        Intensa y explosiva, a veces incontrolable, como el fuego y la marea. Puede ser un agua 
        en calma o un huracán, lo que la hace muy especial. Anti peruanos, eso seguro.
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

export default Volatil;

