import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {_getMoviesList} from '../../services/api';

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
};

type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const useMovieListing = () => {
  return useInfiniteQuery<MoviesResponse, Error>({
    queryKey: ['moviesListing'],
    queryFn: ({pageParam = 1}: any) => _getMoviesList(pageParam),
    getNextPageParam: lastPage => {
      return lastPage?.page && lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    placeholderData: keepPreviousData,
    initialPageParam: 1,
  });
};
