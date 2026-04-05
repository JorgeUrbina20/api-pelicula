import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Columna from "./Columna";
import imgTest from "/src/assets/PeliNE.png";

export default function Buscar() {
  const { query } = useParams();

  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  const key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        setLoading(true);

        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`;
        const res = await fetch(URL);
        const data = await res.json();

        setPeliculas(data.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      cargarPeliculas();
    }
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        Resultados para: "{query}"
      </h1>

      {loading ? (
        <p>Cargando...</p>
      ) : peliculas.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {peliculas.map((pel) => (
            <Columna
              key={pel.id}
              img={
                pel.poster_path
                  ? `https://image.tmdb.org/t/p/w200${pel.poster_path}`
                  : imgTest
              }
              title={pel.title || "Sin título"}
              description={pel.overview || "Sin descripción"}
            />
          ))}
        </div>
      )}

    </div>
  );
}