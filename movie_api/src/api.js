import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apikey}`);
  console.log({ movieList: movie });
};
export const serachMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
