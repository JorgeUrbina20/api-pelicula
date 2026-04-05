# 🎬 MovieApp

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.11-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Aplicación web moderna para explorar películas utilizando la API de TMDb. Incluye búsqueda en tiempo real, navegación por categorías y modo oscuro.

## 🚀 Demo

🔗 **Demo en vivo**: [https://peliculajn.netlify.app/](https://peliculajn.netlify.app/)

## 📋 Características

- 🔍 **Búsqueda en tiempo real** de películas por título
- 🎭 **Navegación por categorías**: Acción, Comedia, Terror
- 🌙 **Modo oscuro** con persistencia en localStorage
- 🎠 **Carrusel personalizado** sin librerías externas
- 📱 **Diseño responsive** para móviles y desktop
- ⚡ **Rendimiento optimizado** con Vite
- 🛡️ **Código limpio** y bien estructurado

## 🛠️ Tecnologías

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS
- **Routing**: React Router DOM
- **API**: TMDb (The Movie Database)
- **Estado**: React Hooks (useState, useEffect)

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/JorgeUrbina20/api-pelicula.git
   cd api-pelicula
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura la API**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu clave API de TMDb:
     ```
     VITE_TMDB_API_KEY=tu_clave_api_aqui
     ```
   - Obtén tu clave gratuita en [TMDb](https://www.themoviedb.org/settings/api)

4. **Ejecuta la aplicación**
   ```bash
   npm run dev
   ```

   La app estará disponible en `http://localhost:5173`

## 📁 Estructura del proyecto

```
src/
├── Components/
│   ├── App.jsx          # Componente principal
│   ├── navbar.jsx       # Barra de navegación
│   ├── Inicio.jsx       # Página de inicio con carrusel
│   ├── Buscar.jsx       # Página de búsqueda
│   └── Pages/
│       ├── Accion.jsx   # Página de películas de acción
│       ├── Comedia.jsx  # Página de películas de comedia
│       ├── Terror.jsx   # Página de películas de terror
│       ├── NotFound.jsx # Página 404
│       └── PagesLayout.jsx # Layout para rutas anidadas
├── assets/              # Imágenes y estilos
└── main.jsx             # Punto de entrada
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una mejora:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Jorge Nuñez**  
- GitHub: [@JorgeUrbina20](https://github.com/JorgeUrbina20)
- LinkedIn: [Jorge Nuñez](https://www.linkedin.com/in/jorge-nu%C3%B1ez-a92811344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!