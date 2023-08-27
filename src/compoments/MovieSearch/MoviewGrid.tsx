import type { Movie } from '../../store/slices/movieSlice'

const MovieGrid: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-12">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="text-center my-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-48 h-64 object-cover rounded-md shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
          <h3 className="mt-2 text-black">{movie.Title}</h3>
        </div>
      ))}
    </div>
  )
}

export default MovieGrid
