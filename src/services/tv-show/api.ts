import API from "../axiosWithConfig";
import { ResponTvShow } from './type';

const getNowTvShow = async () => {
    try {
      const responsetv = await API.get("/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1");
      return responsetv.data as ResponTvShow ;
    } catch (error) {
      console.log(error);
    }
  };
  export {API, getNowTvShow};