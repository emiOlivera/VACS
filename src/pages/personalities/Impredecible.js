import React, {useEffect} from "react";
import "./personality.css";

// 🖼️ Posters
import ataleoftwosisters from "../../movies/impredecible/ataleoftwosisters.jpg";
import donniedarko from "../../movies/impredecible/donniedarko.jpg";
import incendies from "../../movies/impredecible/incendies.jpg";
import lapielquehabito from "../../movies/impredecible/lapielquehabito.jpg";
import mother from "../../movies/impredecible/mother.jpg";
import mulhollanddrive from "../../movies/impredecible/mulhollanddrive.jpg";
import oldboy from "../../movies/impredecible/oldboy.jpg";
import prisoners from "../../movies/impredecible/prisoners.jpg";
import theprestige from "../../movies/impredecible/theprestige.jpg";
import thesixthsense from "../../movies/impredecible/thesixthsense.jpg";

// 🎬 Datos reales
const movies = [
  {
    title: "A Tale of Two Sisters",
    image: ataleoftwosisters,
    director: "Kim Jee-woon",
    year: 2003,
    cast: "Im Soo-jung, Moon Geun-young",
    synopsis: "Dos hermanas enfrentan secretos familiares y sucesos sobrenaturales en su hogar."
  },
  {
    title: "Donnie Darko",
    image: donniedarko,
    director: "Richard Kelly",
    year: 2001,
    cast: "Jake Gyllenhaal, Jena Malone",
    synopsis: "Un adolescente con problemas psicológicos recibe visiones de un conejo gigante que altera su vida."
  },
  {
    title: "Incendies",
    image: incendies,
    director: "Denis Villeneuve",
    year: 2010,
    cast: "Lubna Azabal, Mélissa Désormeaux-Poulin",
    synopsis: "Dos hermanos descubren el pasado secreto de su madre en un conflicto bélico del Medio Oriente."
  },
  {
    title: "La piel que habito",
    image: lapielquehabito,
    director: "Pedro Almodóvar",
    year: 2011,
    cast: "Antonio Banderas, Elena Anaya",
    synopsis: "Un cirujano plástico obsesionado con la creación de piel artificial experimenta con prisioneros."
  },
  {
    title: "Mother",
    image: mother,
    director: "Bong Joon-ho",
    year: 2009,
    cast: "Kim Hye-ja, Won Bin",
    synopsis: "Una madre hace todo lo posible para demostrar la inocencia de su hijo en un asesinato."
  },
  {
    title: "Mulholland Drive",
    image: mulhollanddrive,
    director: "David Lynch",
    year: 2001,
    cast: "Naomi Watts, Laura Harring",
    synopsis: "Una mujer amnésica llega a Los Ángeles y se entrelaza con los misterios del cine y la identidad."
  },
  {
    title: "Oldboy",
    image: oldboy,
    director: "Park Chan-wook",
    year: 2003,
    cast: "Choi Min-sik, Yoo Ji-tae",
    synopsis: "Un hombre secuestrado durante 15 años busca vengarse de quienes lo atraparon."
  },
  {
    title: "Prisoners",
    image: prisoners,
    director: "Denis Villeneuve",
    year: 2013,
    cast: "Hugh Jackman, Jake Gyllenhaal",
    synopsis: "Dos niñas desaparecen y los padres toman decisiones desesperadas mientras la policía investiga."
  },
  {
    title: "The Prestige",
    image: theprestige,
    director: "Christopher Nolan",
    year: 2006,
    cast: "Christian Bale, Hugh Jackman, Scarlett Johansson",
    synopsis: "Dos magos rivales compiten obsesivamente para crear el truco de magia definitivo."
  },
  {
    title: "The Sixth Sense",
    image: thesixthsense,
    director: "M. Night Shyamalan",
    year: 1999,
    cast: "Bruce Willis, Haley Joel Osment",
    synopsis: "Un niño que ve fantasmas busca ayuda de un psicólogo infantil para comprender su don."
  },
];

function Impredecible() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="personality-container">
      <h1>Impredecible</h1>
      <p>
        Sus acciones y decisiones son inesperadas, lo que la hace intrigante y única. Siempre 
        sorprendiendo o saltando con cosas completamente impensadas, para bien o para mal.
        pd: me parece que hoy descubri que tiene un trastorno de deficit de atencion (te quiero ah)
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

export default Impredecible;

