import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./navbar";
import Home from "./Inicio";
import Accion from "./Pages/Accion";
import Comedia from "./Pages/Comedia";
import Terror from "./Pages/Terror";
import Buscar from "./Buscar";
import NotFound from "./Pages/NotFound";
import PagesLayout from "./Pages/PagesLayout";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();
  const isNotFound = location.pathname !== "/" && !location.pathname.startsWith("/pages/") && !location.pathname.startsWith("/buscar/");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} showSearch={!isNotFound} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<PagesLayout />}>
          <Route path="accion" element={<Accion />} />
          <Route path="comedia" element={<Comedia />} />
          <Route path="terror" element={<Terror />} />
        </Route>
        <Route path="/buscar/:query" element={<Buscar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;