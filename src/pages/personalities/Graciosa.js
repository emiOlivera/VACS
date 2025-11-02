import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import anniehall from "../../movies/graciosa/anniehall.jpg";
import borat from "../../movies/graciosa/borat.jpg";
import butimacheerleader from "../../movies/graciosa/butimacheerleader.jpg";
import crazystupidlove from "../../movies/graciosa/crazystupidlove.jpg";
import drstrangelove from "../../movies/graciosa/drstrangelove.jpg";
import goodbyelenin from "../../movies/graciosa/goodbyelenin.jpg";
import palmsprings from "../../movies/graciosa/palmsprings.jpg";
import thebiglebowski from "../../movies/graciosa/thebiglebowski.jpg";
import therockyhorrorpictureshow from "../../movies/graciosa/therockyhorrorpictureshow.jpg";
import zoolander from "../../movies/graciosa/zoolander.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Annie Hall",
    image: anniehall,
    director: "Woody Allen",
    year: 1977,
    cast: "Woody Allen, Diane Keaton",
    synopsis: "La historia de una relación amorosa excéntrica y sus complicaciones, con mucho humor intelectual."
  },
  {
    title: "Borat",
    image: borat,
    director: "Larry Charles",
    year: 2006,
    cast: "Sacha Baron Cohen, Ken Davitian",
    synopsis: "Un periodista kazajo viaja a EEUU y provoca situaciones hilarantes mientras aprende sobre la sociedad estadounidense."
  },
  {
    title: "But I’m a Cheerleader",
    image: butimacheerleader,
    director: "Jamie Babbit",
    year: 1999,
    cast: "Natasha Lyonne, Clea DuVall",
    synopsis: "Una adolescente es enviada a un campamento de conversión para heterosexuales y descubre su identidad sexual."
  },
  {
    title: "Crazy, Stupid, Love",
    image: crazystupidlove,
    director: "Glenn Ficarra, John Requa",
    year: 2011,
    cast: "Steve Carell, Ryan Gosling, Julianne Moore",
    synopsis: "Un hombre recién divorciado aprende a ligar con la ayuda de un joven experto mientras lidia con su familia."
  },
  {
    title: "Dr. Strangelove",
    image: drstrangelove,
    director: "Stanley Kubrick",
    year: 1964,
    cast: "Peter Sellers, George C. Scott",
    synopsis: "Una sátira sobre la Guerra Fría y la amenaza nuclear, con un humor negro brillante."
  },
  {
    title: "Goodbye Lenin",
    image: goodbyelenin,
    director: "Wolfgang Becker",
    year: 2003,
    cast: "Daniel Brühl, Katrin Sass",
    synopsis: "Un joven protege a su madre de la verdad sobre la caída del Muro de Berlín de manera cómica y emotiva."
  },
  {
    title: "Palm Springs",
    image: palmsprings,
    director: "Max Barbakow",
    year: 2020,
    cast: "Andy Samberg, Cristin Milioti",
    synopsis: "Dos personas atrapadas en un bucle temporal encuentran romance y risas mientras repiten el mismo día."
  },
  {
    title: "The Big Lebowski",
    image: thebiglebowski,
    director: "Joel Coen, Ethan Coen",
    year: 1998,
    cast: "Jeff Bridges, John Goodman",
    synopsis: "Un hombre tranquilo se ve envuelto en un lío criminal absurdo lleno de personajes excéntricos."
  },
  {
    title: "The Rocky Horror Picture Show",
    image: therockyhorrorpictureshow,
    director: "Jim Sharman",
    year: 1975,
    cast: "Tim Curry, Susan Sarandon",
    synopsis: "Una pareja se encuentra con un extravagante científico y sus locos invitados en esta comedia musical de culto."
  },
  {
    title: "Zoolander",
    image: zoolander,
    director: "Ben Stiller",
    year: 2001,
    cast: "Ben Stiller, Owen Wilson, Will Ferrell",
    synopsis: "Un modelo masculino perdido y ridículo es manipulado en un complot de asesinato, lleno de sátira y humor absurdo."
  },
];

function Graciosa() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Graciosa</h1>
      <p>

        Entiende todo tipo de humor y es genuinamente graciosa con las formas de contar las cosas, 
        incluso gestualizándolas. Mi gesto favorito es cuando dice "es un loco esto" o imita a martin cirio jakajkaj
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

export default Graciosa;
