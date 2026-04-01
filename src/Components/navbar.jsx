import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgLogo from "../assets/icono-pelicula-cine.png";

export default function NavBar({ darkMode, setDarkMode }) {
  const [pelicula, setPelicula] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pelicula.trim()) return;

    navigate(`/buscar/${encodeURIComponent(pelicula)}`);
    setPelicula("");
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <NavLink to="/">
          <img src={imgLogo} alt="logo" className="h-10" />
        </NavLink>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <NavLink to="/accion" className="hover:text-blue-500">Acción</NavLink>
          <NavLink to="/comedia" className="hover:text-blue-500">Comedia</NavLink>
          <NavLink to="/terror" className="hover:text-blue-500">Terror</NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              value={pelicula}
              onChange={(e) => setPelicula(e.target.value)}
              placeholder="Buscar..."
              className="border px-3 py-1 rounded dark:bg-gray-800 dark:border-gray-600"
            />
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Buscar
            </button>
          </form>

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-2 py-1 border rounded dark:border-gray-600"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </header>
  );
}