import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import imgLogo from "../assets/icono-pelicula-cine.png";

// Imágenes de las películas
import imgPel1 from "../assets/Aladdin_Cartelera.jpg";
import imgPel2 from "../assets/Gladiator_Cartelera.png";
import imgPel3 from "../assets/Matrix_Cartelera.jpg";
import imgPel4 from "../assets/Titanic_Cartelera.png";
import imgPel5 from "../assets/Lilo_Cartelera.png";

export default function Inicio() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)", // capa oscura sutil
    zIndex: 1,
  };

  const captionStyle = {
    zIndex: 2,
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  };

  return (
    <>
      {/* Carrusel principal sin oscurecer */}
      <Carousel fade className="mt-3 rounded overflow-hidden shadow-lg bg-dark">
        <Carousel.Item interval={2500}>
          <img
            className="d-block mx-auto"
            src={imgPel1}
            alt="Película de Aladdin"
            style={{
              maxHeight: "520px",
              width: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="d-block mx-auto"
            src={imgPel2}
            alt="Película de Gladiator"
            style={{
              maxHeight: "520px",
              width: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="d-block mx-auto"
            src={imgPel3}
            alt="Película de Matrix"
            style={{
              maxHeight: "520px",
              width: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="d-block mx-auto"
            src={imgPel4}
            alt="Película de Aladdin"
            style={{
              maxHeight: "520px",
              width: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="d-block mx-auto"
            src={imgPel5}
            alt="Película de Aladdin"
            style={{
              maxHeight: "520px",
              width: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Sección de presentación */}
      <Container className="text-center mt-5 px-4">
        <h1 className="fw-bold mb-3">Bienvenido a <span className="text-primary">MovieApp 🎬</span></h1>

        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
          Explora películas por categoría, busca tus favoritas y aprende sobre cómo usar APIs de cine.  
          Este proyecto fue creado por <strong>Jorge Nuñez</strong> como un inicio para dominar React y TMDb.  
          <br />
          Puedes ver la documentación oficial en
          <a
            href="https://github.com/JorgeUrbina20/api-pelicula"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", marginLeft: "5px" }}
          >
            <strong>mi cuenta de GitHub</strong>
          </a>.
        </p>

        <div className="mt-4">
          <Image
            src={imgLogo}
            alt="Logo MovieApp"
            fluid
            style={{ maxWidth: "180px", marginTop: "10px" }}
          />
        </div>
      </Container>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 768px) {
          .carousel-caption h3 {
            font-size: 1.4rem;
          }
          .carousel-caption p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          img.d-block {
            max-height: 300px !important;
          }
          .carousel-caption {
            bottom: 1rem;
          }
          .carousel-caption h3 {
            font-size: 1.2rem;
          }
          .carousel-caption p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
