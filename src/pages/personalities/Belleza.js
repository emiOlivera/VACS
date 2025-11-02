import "./personality.css";
import React, { useEffect } from "react";

// 🖼️ Posters
import adifferentman from "../../movies/belleza/adifferentman.jpg";
import americanbeauty from "../../movies/belleza/americanbeauty.jpg";
import breakfastattiffanys from "../../movies/belleza/breakfastattiffanys.jpg";
import gia from "../../movies/belleza/gia.jpg";
import helterskelter from "../../movies/belleza/helterskelter.jpg";
import marieantoinette from "../../movies/belleza/marieantoinette.jpg";
import moulinrouge from "../../movies/belleza/moulinrouge.jpg";
import secretary from "../../movies/belleza/secretary.jpg";
import thesubstance from "../../movies/belleza/thesubstance.jpg";
import valleyofthedolls from "../../movies/belleza/valleyofthedolls.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "A Different Man",
    image: adifferentman,
    director: "Aaron Schimberg",
    year: 2017,
    cast: "Colin Farrell, Rebecca Hall",
    synopsis: "Una historia de transformación personal y aceptación en la vida de un hombre que enfrenta una pérdida y busca reinventarse."
  },
  {
    title: "American Beauty",
    image: americanbeauty,
    director: "Sam Mendes",
    year: 1999,
    cast: "Kevin Spacey, Annette Bening, Thora Birch",
    synopsis: "Un hombre en crisis de mediana edad experimenta cambios en su vida y percepción de la belleza que lo rodea."
  },
  {
    title: "Breakfast at Tiffany's",
    image: breakfastattiffanys,
    director: "Blake Edwards",
    year: 1961,
    cast: "Audrey Hepburn, George Peppard",
    synopsis: "Una joven sofisticada y misteriosa vive en Nueva York buscando su lugar en el mundo mientras encuentra el amor inesperadamente."
  },
  {
    title: "Gia",
    image: gia,
    director: "Michael Cristofer",
    year: 1998,
    cast: "Angelina Jolie, Faye Dunaway",
    synopsis: "La vida de Gia Carangi, una supermodelo icónica de los años 70, marcada por la fama, el amor y la tragedia."
  },
  {
    title: "Helter Skelter",
    image: helterskelter,
    director: "Tommy Lee Wallace",
    year: 1976,
    cast: "Steve Railsback, Shirley Knight",
    synopsis: "La historia real del ascenso y caída de la familia Manson y los crímenes que conmocionaron a Estados Unidos."
  },
  {
    title: "Marie Antoinette",
    image: marieantoinette,
    director: "Sofia Coppola",
    year: 2006,
    cast: "Kirsten Dunst, Jason Schwartzman",
    synopsis: "Una visión estilizada de la vida de la famosa reina francesa, desde su llegada a Versalles hasta la revolución."
  },
  {
    title: "Moulin Rouge!",
    image: moulinrouge,
    director: "Baz Luhrmann",
    year: 2001,
    cast: "Nicole Kidman, Ewan McGregor",
    synopsis: "Una historia de amor trágica y apasionada ambientada en el cabaret más famoso de París a principios del siglo XX."
  },
  {
    title: "Secretary",
    image: secretary,
    director: "Steven Shainberg",
    year: 2002,
    cast: "Maggie Gyllenhaal, James Spader",
    synopsis: "La relación poco convencional entre una secretaria y su jefe, explorando temas de poder, deseo y autoaceptación."
  },
  {
    title: "The Substance",
    image: thesubstance,
    director: "Coralie Fargeat",
    year: 2024,
    cast: "Demi Moore, Margaret Qualley, Dennis Quaid",
    synopsis: "Tras ser despedida por su edad, una celebridad utiliza una droga que crea una versión más joven de ella misma con consecuencias inesperadas."
  },
  {
    title: "Valley of the Dolls",
    image: valleyofthedolls,
    director: "Mark Robson",
    year: 1967,
    cast: "Barbara Parkins, Patty Duke, Sharon Tate",
    synopsis: "Tres mujeres enfrentan fama, amor y dependencia en la industria del espectáculo, explorando belleza y fragilidad."
  },
];

function Belleza() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="personality-container">
      <h1>Belleza</h1>
      <p>
        Es un espíritu independiente y hermoso, que podria describir de vos en este aspecto que no haya hecho,
        si cada vez que te miro se me derrumba el mundo casi al punto de sentirme honrado de verte.
        En caso de que no te lo haya dicho hoy, estas hermosa, y en caso de ya no ser parte de tu vida, y nadie
        te lo haya dicho hoy, tambien quiero que sepas que lo mas probable es que sigas tan hermosa como siempre. 
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

export default Belleza;

