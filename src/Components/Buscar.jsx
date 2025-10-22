import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Columna from "./Columna";
import imgTest from "../assets/PeliNE.png";

function Buscar() {
  const { query } = useParams(); // <-- aquí agarra lo que esté en la URL
  const [peliculas, setPeliculas] = useState([]);
  const key = "1cdcdf9a80ee2d74daea7736470544c3";

  useEffect(() => {
    async function fetchPeliculas() {
      if (!query) return;
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`;
      const resp = await fetch(URL);
      const data = await resp.json();
      setPeliculas(data.results || []);
    }
    fetchPeliculas();
  }, [query]);

  return (
    <Container>
      <h1>Resultados para: "{query}"</h1>
      <Row>
        {peliculas.length > 0 ? (
          peliculas.map((pel, i) => (
            <Columna
              key={i}
              img={pel.poster_path ? `https://image.tmdb.org/t/p/w200${pel.poster_path}` : imgTest}
              title={pel.title}
              description={pel.overview}
            />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </Row>
    </Container>
  );
}

export default Buscar;
