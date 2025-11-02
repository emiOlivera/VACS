import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

// Componentes de personalidades
import Amorosa from "./pages/personalities/Amorosa";
import Temeraria from "./pages/personalities/Temeraria";
import Graciosa from "./pages/personalities/Graciosa";
import Aventurera from "./pages/personalities/Aventurera";
import Empatica from "./pages/personalities/Empatica";
import Dramatica from "./pages/personalities/Dramatica";
import Volatil from "./pages/personalities/Volatil";
import Sonadora from "./pages/personalities/Sonadora";
import Inteligente from "./pages/personalities/Inteligente";
import Melomana from "./pages/personalities/Melomana";
import Cinefila from "./pages/personalities/Cinefila";
import Empoderada from "./pages/personalities/Empoderada";
import Belleza from "./pages/personalities/Belleza";
import Trabajadora from "./pages/personalities/Trabajadora";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/amorosa" element={<Amorosa />} />
        <Route path="/temeraria" element={<Temeraria />} />
        <Route path="/graciosa" element={<Graciosa />} />
        <Route path="/aventurera" element={<Aventurera />} />
        <Route path="/empatica" element={<Empatica />} />
        <Route path="/dramatica" element={<Dramatica />} />
        <Route path="/volatil" element={<Volatil />} />
        <Route path="/sonadora" element={<Sonadora />} />
        <Route path="/inteligente" element={<Inteligente />} />
        <Route path="/melomana" element={<Melomana />} />
        <Route path="/cinefila" element={<Cinefila />} />
        <Route path="/empoderada" element={<Empoderada />} />
        <Route path="/belleza" element={<Belleza />} />
        <Route path="/trabajadora" element={<Trabajadora/>}/>
      </Routes>
    </Router>
  );
}

export default App;
