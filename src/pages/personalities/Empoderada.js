import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import battleofsexes from "../../movies/empoderada/battleofthesexes.jpg";
import blue from "../../movies/empoderada/blue.jpg";
import killbill from "../../movies/empoderada/killbill.jpg";
import ladybird from "../../movies/empoderada/ladybird.jpg";
import legallyblonde from "../../movies/empoderada/legallyblonde.jpg";
import littlewoman from "../../movies/empoderada/littlewoman.jpg";
import mulan from "../../movies/empoderada/mulan.jpg";
import pearl from "../../movies/empoderada/pearl.jpg";
import thefavourite from "../../movies/empoderada/thefavourite.jpg";
import theinvisibleman from "../../movies/empoderada/theinvisibleman.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "Battle of the Sexes",
    image: battleofsexes,
    director: "Jonathan Dayton, Valerie Faris",
    year: 2017,
    cast: "Emma Stone, Steve Carell",
    synopsis: "La histórica partida de tenis entre Billie Jean King y Bobby Riggs y la lucha por la igualdad de género."
  },
  {
    title: "Blue",
    image: blue,
    director: "Krzysztof Kieslowski",
    year: 1993,
    cast: "Juliette Binoche, Benoît Régent",
    synopsis: "Una mujer intenta reconstruir su vida tras la muerte de su esposo e hija, explorando libertad y dolor."
  },
  {
    title: "Kill Bill",
    image: killbill,
    director: "Quentin Tarantino",
    year: 2003,
    cast: "Uma Thurman, David Carradine",
    synopsis: "Una asesina busca venganza contra quienes intentaron matarla y destruyeron su vida."
  },
  {
    title: "Lady Bird",
    image: ladybird,
    director: "Greta Gerwig",
    year: 2017,
    cast: "Saoirse Ronan, Laurie Metcalf",
    synopsis: "Una adolescente navega por su último año de secundaria y la compleja relación con su madre."
  },
  {
    title: "Legally Blonde",
    image: legallyblonde,
    director: "Robert Luketic",
    year: 2001,
    cast: "Reese Witherspoon, Luke Wilson",
    synopsis: "Una joven determinada demuestra que es mucho más que su apariencia al estudiar derecho en Harvard."
  },
  {
    title: "Little Women",
    image: littlewoman,
    director: "Greta Gerwig",
    year: 2019,
    cast: "Saoirse Ronan, Emma Watson, Florence Pugh",
    synopsis: "La vida de las hermanas March mientras buscan amor, éxito y realización personal."
  },
  {
    title: "Mulan",
    image: mulan,
    director: "Niki Caro",
    year: 2020,
    cast: "Liu Yifei, Donnie Yen",
    synopsis: "Una joven valiente se disfraza de hombre para salvar a su padre y defender a su país."
  },
  {
    title: "Pearl",
    image: pearl,
    director: "Ti West",
    year: 2022,
    cast: "Mia Goth, David Corenswet",
    synopsis: "La historia de una joven ambiciosa y su obsesión por cumplir sus sueños, incluso a costa de todo."
  },
  {
    title: "The Favourite",
    image: thefavourite,
    director: "Yorgos Lanthimos",
    year: 2018,
    cast: "Olivia Colman, Emma Stone, Rachel Weisz",
    synopsis: "Intrigas, rivalidades y ambiciones en la corte de la Reina Ana del Reino Unido."
  },
  {
    title: "The Invisible Man",
    image: theinvisibleman,
    director: "Leigh Whannell",
    year: 2020,
    cast: "Elisabeth Moss, Oliver Jackson-Cohen",
    synopsis: "Una mujer escapa de su abusivo ex y descubre que él puede seguirla invisible, enfrentando el terror psicológico."
  },
];

function Empoderada() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Empoderada</h1>
      <p>
        No hace falta ni describir esto, es la reencarnacion de una bruja.
        nacio para la guerra, en el buen sentido: Una guerrera nata, el tipo de mujer 
        por la que muchas luchan y tienen voz. Por eso muchos 
        respetan y temen su capacidad.
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

export default Empoderada;
