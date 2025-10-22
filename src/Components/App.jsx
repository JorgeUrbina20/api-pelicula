import {Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./Inicio";
import Accion from "./Pages/Accion";
import Comedia from "./Pages/Comedia";
import Terror from "./Pages/Terror";
import Buscar from "./Buscar";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accion" element={<Accion />} />
        <Route path="/Comedia" element={<Comedia />} />
        <Route path="/Terror" element={<Terror />} />
        <Route path="/buscar/:query" element={<Buscar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
