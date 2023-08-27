// import { Link } from 'react-router-dom'

type MovieGridProps = {
  children: React.ReactNode
}

const MovieGrid: React.FC<MovieGridProps> = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-12">
    {children}
  </div>
)

export default MovieGrid
