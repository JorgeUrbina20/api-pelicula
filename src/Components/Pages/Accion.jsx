import { useEffect, useState } from "react";
import Columna from "../Columna";
import imgTest from "/src/assets/PeliNE.png";

function Accion() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  const key = "1cdcdf9a80ee2d74daea7736470544c3";

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=Matar%20o%20morir`;
        const respuesta = await fetch(URL);
        const datos = await respuesta.json();
        setPeliculas(datos.results || []);
      } catch (error) {
        console.error("Error al cargar películas", error);
      } finally {
        setLoading(false);
      }
    };

    cargarPeliculas();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        Películas de Acción
      </h1>

      {loading ? (
        <p>Cargando...</p>
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
              description={pel.overview || "Sin descripción disponible."}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Accion;