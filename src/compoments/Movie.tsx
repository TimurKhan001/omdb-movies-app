type MovieProps = {
  id: string
  poster: string
  title: string
}

const Movie: React.FC<MovieProps> = ({ id, poster, title }) => (
  <div id={id} className="text-center my-4 relative">
    <img
      src={poster}
      alt={title}
      className="w-48 h-64 object-cover rounded-md shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    />
    <h3 className="mt-2 text-black dark:text-white">{title}</h3>
  </div>
)

export default Movie
