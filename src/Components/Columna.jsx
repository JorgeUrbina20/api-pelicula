export default function Columna({ img, title, description }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={img || "/no-image.png"}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-2">

        <h2 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h2>

        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>

      </div>
    </div>
  );
}