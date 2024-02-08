// store/movies.js
import axios from 'axios';

export const state = () => ({
  movies: [],
});

export const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  },
};

export const actions = {
  async fetchMovies({ commit }) {
    const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const movies = response.data.results.map(movie => ({
        ...movie,
        posterUrl: getMoviePosterUrl(movie.poster_path),
      }));
      commit('setMovies', movies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};

// Helper function to get the movie poster URL
export const getMoviePosterUrl = posterPath => {
  // Base URL for TMDb poster images
  const basePosterUrl = 'https://image.tmdb.org/t/p/w500';

  // If the posterPath is available, construct the complete URL
  return posterPath ? `${basePosterUrl}${posterPath}` : ''; // You can also provide a default image if posterPath is not available
};
