import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {_getMoviesDetails} from '../../services/api';

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => _getMoviesDetails(movieId),
    placeholderData: keepPreviousData,
  });
};
