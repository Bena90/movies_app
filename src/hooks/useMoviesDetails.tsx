import React from 'react';
import movieDB from '../api/movieDB';
import { CastElement, CreditsResponse, FullMovie } from '../interfaces/movieInterface';

interface MoviesDetailsState {
  cast?: CastElement[];
  isLoading: boolean;
  movieFull?: FullMovie;
}

export const useMoviesDetails = (movieId: number) => {
  const [ movieDetails ,setMovieDetails ] = React.useState<MoviesDetailsState>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  })


  const getMovieDetails = async() => {
    
    const movieDetailsPromise = await movieDB.get <FullMovie> (`/${movieId}`);
    const castPromise = await movieDB.get <CreditsResponse> (`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailsPromise, castPromise])

    setMovieDetails({
        isLoading: false,
        movieFull: movieDetailsResponse.data,
        cast: castResponse.data.cast
    })

  }
  
  React.useEffect(()=> {
    getMovieDetails()
  }, [])

  return {
    ...movieDetails,
  }
}