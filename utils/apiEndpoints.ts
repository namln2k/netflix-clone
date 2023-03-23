const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const endpoints = {
  actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  netflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default endpoints;
