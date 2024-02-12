<template>
    <div class="movie-details">
      <h1>{{ movie.title }}</h1>
      <img :src="moviePosterUrl(movie.poster_path)" alt="Movie Poster" />
      <p>Release Date: {{ movie.release_date }}</p>
      <p>Overview: {{ movie.overview }}</p>
      <!-- Add other details as needed -->
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params, store }) {
      const movieId = params.id;
      await store.dispatch('movies/fetchMovieDetails', movieId);
      return { movieId };
    },
  
    computed: {
      movie() {
        return this.$store.state.movies.selectedMovie;
      },
    },
  
    methods: {
      moviePosterUrl(poster_path) {
        const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
        return poster_path ? `${basePosterUrl}${poster_path}` : '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles for the MovieDetails component */
  </style>
  