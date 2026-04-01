export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Página no encontrada 😢
      </p>

      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Volver al inicio
      </a>

    </div>
  );
}