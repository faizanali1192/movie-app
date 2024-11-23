import {API_ENDPOINTS} from '../utilities/constants';
import {axiosInstance} from './axiosConfiguration';

export const _getMoviesList = async (page?: number) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.MOVIES_LISTING}`,
      {
        params: {
          page,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    console.error('Failed to fetch customers list:', error);
    throw error.response.data;
  }
};

export const _getMoviesDetails = async (movieId?: number) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.MOVIE_DETAILS}/${movieId}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Failed to fetch customers list:', error);
    throw error.response.data;
  }
};
