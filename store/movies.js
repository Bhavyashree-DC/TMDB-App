// store/movies.js
// import axios from 'axios';

export const state = () => ({
  movies: [],
});

export const mutations = {
     setMovies(state, movies) {
        state.movies = movies;
     }
}

export const actions = {
    async fetchMovies({ commit }) {
      const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
      const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

      try{
         const response = await this.$axios.get(apiUrl);
         commit('setMovies',response.data.results);
      }
      catch(error){
        console.log(error);
      }
   }
}

