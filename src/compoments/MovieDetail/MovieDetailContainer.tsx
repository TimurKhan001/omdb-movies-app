import { useParams } from 'react-router-dom'

import { useGetMovieByIdQuery } from '../../store/slices/movieApi'

import MovieDetailDisplay from './MovieDetailDisplay'

const MovieDetailContainer: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>()

  const {
    data: movieDetail,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(movieId as string, { skip: !movieId })

  return (
    <MovieDetailDisplay
      movieDetail={movieDetail}
      isLoading={isLoading}
      isError={isError}
      missingId={!movieId}
    />
  )
}

export default MovieDetailContainer
