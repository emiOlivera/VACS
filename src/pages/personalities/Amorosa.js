import React, { useEffect } from "react";
import "./personality.css";

// 🖼️ Posters
import beforesunrise from "../../movies/amorosa/beforesunrise.jpg";
import casablanca from "../../movies/amorosa/casablanca.jpg";
import inthemoodforlove from "../../movies/amorosa/inthemoodforlove.jpg";
import littlefish from "../../movies/amorosa/littlefish.jpg";
import neverletmego from "../../movies/amorosa/neverletmego.jpg";
import orgulloyprejuicio from "../../movies/amorosa/orgulloyprejuicio.jpg";
import paristexas from "../../movies/amorosa/paristexas.jpg";
import romanholiday from "../../movies/amorosa/romanholiday.jpg";
import thenotebook from "../../movies/amorosa/thenotebook.jpg";
import pastlives from "../../movies/amorosa/pastlives.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Before Sunrise",
    image: beforesunrise,
    director: "Richard Linklater",
    year: 1995,
    cast: "Ethan Hawke, Julie Delpy",
    synopsis: "Dos jóvenes se conocen en un tren y pasan una noche caminando por Viena explorando la conexión entre ellos."
  },
  {
    title: "Casablanca",
    image: casablanca,
    director: "Michael Curtiz",
    year: 1942,
    cast: "Humphrey Bogart, Ingrid Bergman",
    synopsis: "Durante la Segunda Guerra Mundial, el dueño de un café en Casablanca se reencuentra con un amor de su pasado entre intrigas y exilios."
  },
  {
    title: "In the Mood for Love",
    image: inthemoodforlove,
    director: "Wong Kar‑wai",
    year: 2000,
    cast: "Tony Leung, Maggie Cheung",
    synopsis: "Un hombre y una mujer sospechan que sus parejas les son infieles y lentamente desarrollan una conexión silenciosa y profunda en el Hong Kong de los años 60."
  },
  {
    title: "Little Fish",
    image: littlefish,
    director: "Rowan Woods",
    year: 2005,
    cast: "Cate Blanchett, Hugo Weaving, Sam Neill",
    synopsis: "Una mujer limpia de heroína desde hace cuatro años lucha por abrir su propio negocio mientras su pasado la acecha." /* :contentReference[oaicite:0]{index=0} */
  },
  {
    title: "Never Let Me Go",
    image: neverletmego,
    director: "Mark Romanek",
    year: 2010,
    cast: "Carey Mulligan, Keira Knightley, Andrew Garfield",
    synopsis: "Amistad, amor y destino trágico en un mundo distópico donde los seres humanos nacen para donar órganos."
  },
  {
    title: "Orgullo y Prejuicio",
    image: orgulloyprejuicio,
    director: "Joe Wright",
    year: 2005,
    cast: "Keira Knightley, Matthew Macfadyen",
    synopsis: "Una apasionada adaptación del clásico de Jane Austen donde la joven Elizabeth Bennet y el señor Darcy deben superar sus prejuicios y orgullo."
  },
  {
    title: "Paris, Texas",
    image: paristexas,
    director: "Wim Wenders",
    year: 1984,
    cast: "Harry Dean Stanton, Nastassja Kinski",
    synopsis: "Un hombre que ha desaparecido reaparece años después para buscar una nueva conexión con su hijo y exesposa, explorando el sentido del hogar y de la memoria."
  },
  {
    title: "Roman Holiday",
    image: romanholiday,
    director: "William Wyler",
    year: 1953,
    cast: "Audrey Hepburn, Gregory Peck",
    synopsis: "Una princesa escapa de sus obligaciones reales y conoce Roma con un periodista americano, viviendo una noche de libertad y romance."
  },
  {
    title: "The Notebook",
    image: thenotebook,
    director: "Nick Cassavetes",
    year: 2004,
    cast: "Ryan Gosling, Rachel McAdams",
    synopsis: "Un hombre lee la historia de un amor vivido décadas atrás para revelarle a su esposa los recuerdos que comparten."
  },
  {
    title: "Past Lives",
    image: pastlives,
    director: "Celine Song",
    year: 2023,
    cast: "Greta Lee, Teo Yoo",
    synopsis: "Dos amigos de infancia se reencuentran tras años separados y reflexionan sobre lo que pudo haber sido, el amor y el paso del tiempo."
  },
];

function Amorosa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="personality-container">
      <h1>Amorosa</h1>
      <p>
        Las personas que no llegan a conocerte pueden tender a pensar que sos una persona poco amorosa,
        o poco romantica, pero una vez que empezas a entrar en confianza te das cuenta que con pequeños
        gestos, sos capaz de demostrar una cantidad enorme de amor, por amigos, familia, mascotas o quien sea.
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

export default Amorosa;


