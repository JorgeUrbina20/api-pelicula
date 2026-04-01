import { useState, useEffect } from "react";

import imgPel1 from "../assets/Aladdin_Cartelera.jpg";
import imgPel2 from "../assets/Gladiator_Cartelera.png";
import imgPel3 from "../assets/Matrix_Cartelera.jpg";
import imgPel4 from "../assets/Titanic_Cartelera.png";
import imgPel5 from "../assets/Lilo_Cartelera.png";

export default function Inicio() {
  const images = [imgPel1, imgPel2, imgPel3, imgPel4, imgPel5];

  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Carousel */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-lg">

        <img
          src={images[index]}
          className="w-full h-full object-contain bg-black transition duration-500"
        />

        {/* Botones */}
        <button
          onClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 text-7xl cursor-pointer bg-black/50 text-white px-3 py-1 rounded"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setIndex((index + 1) % images.length)
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 text-7xl cursor-pointer bg-black/50 text-white px-3 py-1 rounded"
        >
          ›
        </button>

      </div>

      <div className="text-center mt-10">

  <h1 className="text-3xl font-bold mb-4">
    MovieApp 🎬
  </h1>

  <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
    Demo de aplicación de películas desarrollada con React.  
    Proyecto realizado por <strong>Jorge Nuñez</strong>.
  </p>

  <a
    href="https://github.com/JorgeUrbina20/api-pelicula"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-600 hover:underline"
  >
    Ver repositorio en GitHub
  </a>

</div>

    </div>
  );
}