import React from 'react'
import { Link } from 'react-router-dom'

import Button from './misc/Button'
import Movie from './Movie'

type MovieWithActionsProps = {
  id: string
  poster: string
  title: string
  handleRemove?: (id: string) => void
}

const MovieCard: React.FC<MovieWithActionsProps> = ({
  id,
  poster,
  title,
  handleRemove,
}) => (
  <div key={id} className="relative group">
    <Link to={`/detail/${id}`} className="block">
      <Movie id={id} poster={poster} title={title} />
    </Link>
    {handleRemove && (
      <button
        onClick={() => handleRemove(id)}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        Remove
      </button>
    )}
  </div>
)

export default MovieCard
