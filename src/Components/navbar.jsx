import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgLogo from "../assets/icono-pelicula-cine.png";

export default function NavBar({ darkMode, setDarkMode, showSearch = true }) {
  const [pelicula, setPelicula] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pelicula.trim()) return;

    navigate(`/buscar/${encodeURIComponent(pelicula)}`);
    setPelicula("");
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">

        {/* Logo + mobile controls */}
        <div className="flex w-full items-center justify-between md:w-auto">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={imgLogo} alt="logo" className="h-10" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Películas</span>
          </NavLink>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex items-center justify-center rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
              aria-label="Alternar modo oscuro"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Abrir menú</span>
              <div className="flex h-5 w-6 flex-col justify-between gap-1">
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <NavLink to="/pages/accion" className="hover:text-blue-500">Acción</NavLink>
          <NavLink to="/pages/comedia" className="hover:text-blue-500">Comedia</NavLink>
          <NavLink to="/pages/terror" className="hover:text-blue-500">Terror</NavLink>
        </nav>

        {/* Actions */}
        <div className="flex flex-1 flex-col gap-2 md:flex-row md:flex-none md:items-center md:gap-2">
          {showSearch && (
            <form onSubmit={handleSearch} className="flex w-full gap-2 md:w-auto">
              <input
                value={pelicula}
                onChange={(e) => setPelicula(e.target.value)}
                placeholder="Buscar..."
                className="w-full min-w-0 rounded border px-3 py-1 text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
              <button className="whitespace-nowrap rounded bg-blue-600 px-3 py-1 text-white">Buscar</button>
            </form>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 dark:border-gray-600 dark:text-gray-300 md:inline-flex"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900`}>
        <nav className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
          <NavLink
            to="/pages/accion"
            className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Acción
          </NavLink>
          <NavLink
            to="/pages/comedia"
            className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Comedia
          </NavLink>
          <NavLink
            to="/pages/terror"
            className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Terror
          </NavLink>
        </nav>
      </div>
    </header>
  );
}