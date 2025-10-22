import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Columna from "../Columna";
import imgTest from "/src/assets/PeliNE.png";

function Comedia() {
  const [peliculas, setPeliculas] = useState([]);
  const key = "1cdcdf9a80ee2d74daea7736470544c3";

  useEffect(() => {
    async function cargarPeliculas() {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=humor`;
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setPeliculas(datos.results || []);
    }
    cargarPeliculas();
  }, []);

  return (
    <Container fluid>
      <h1>Películas de Comedia</h1>
      <Row>
        {peliculas.length > 0 ? (
          peliculas.map((pel, i) => (
            <Columna
              key={i}
              img={pel.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${pel.poster_path}` 
                    : imgTest
                  }
              title={pel.title || "Sin título"}
              description={pel.overview || "Sin descripción disponible."}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </Row>
    </Container>
  );
}

export default Comedia;
