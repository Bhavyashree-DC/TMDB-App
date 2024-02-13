// store/movies.js
export const state = () => ({
   movies: [],
   selectedMovie: null, 
 });
 
 export const mutations = {
   setMovies(state, movies) {
     state.movies = movies;
   },
   setSelectedMovie(state, movie) {
     state.selectedMovie = movie;
   },
 };
 
 export const actions = {
   async fetchMovies({ commit }) {
     const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
     const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
 
     try {
       const response = await this.$axios.get(apiUrl);
       commit('setMovies', response.data.results);
     } catch (error) {
       console.log(error);
     }
   },
 
   async fetchMovieDetails({ commit }, movieId) {
     const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
     const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
 
     try {
       const response = await this.$axios.get(apiUrl);
       commit('setSelectedMovie', response.data);
     } catch (error) {
       console.log(error);
     }
   },
 };
 