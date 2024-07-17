import { Movie, ResponseMovie } from './type';

import API from "../axiosWithConfig";

const getNowPlaying = async (page : String) => {
    try {
      const response = await API.get(`/movie/now_playing?language=en-US&page=${page}`);
      console.log(response);
      return response.data as ResponseMovie;
     
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieDetails = async (id: string) => {
    try {
      const response = await API.get(`/movie/${id}?language=en-US`);
      return response.data as Movie;
    } catch (error) {
      console.error(error);
    }
  };

  export {API,getNowPlaying,getMovieDetails};