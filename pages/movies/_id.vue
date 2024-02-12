<template>
    <div class="movie-overview">
        <div class="header">
            <h1>{{ movie.title }}</h1>
        </div>
        <div class="overview">
            <img :src="moviePosterUrl(movie.poster_path)" alt="Movie Poster" />
            
            <div class="contents">
                <h1><b>Original Name:  {{ movie.original_title }} </b></h1>
                <p><strong>Release Date: </strong>{{ movie.release_date }}</p>
                <h3><strong>Overview: </strong></h3>
                <p>{{ movie.overview }}</p>
                <p><strong>TagLine: </strong>{{ movie.tagline }}</p>
                <p><strong>Status: </strong> {{ movie.status }}</p>
                <p><strong>Language: </strong> {{ movie.original_language }}</p>
            
                <p><strong>Popularity: </strong>{{ movie.popularity }}</p>
                <p><strong>Vote Average: </strong>{{ movie.vote_average }}</p>
                <p><strong>Vote Count: </strong>{{ movie.vote_count }}</p>   
            </div>
        </div>
     
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
   .movie-overview{
       width:76%;
       height: 100vh;
       margin: 0px auto;
       display: flex;
       align-items: flex-start;
       justify-content: flex-start;
       flex-direction: column;
   }
   .movie-overview .header{
       font-size: 1.3rem;
       font-weight: 600;
       text-align:center;
       margin: 30px;
       padding: 10px ;
   }
   .overview{
      display: flex;
      align-self: flex-start;
      justify-content: center;
      /* flex-direction: column; */
   }
   .overview img{
      width: 300px;
      height: 460px;
      border-radius: 20px;
      margin: 60px;
     
   }
   .contents{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 30px 10px;
      padding: 40px;
   }
   .contents h1{
     padding-bottom: 20px;
   }
   .contents h3{
      font-size: 24px;
      font-weight: 400;
      /* padding-bottom: 8px; */
      line-height: 40px;
   }
   .contents p{
      font-size: 24px;
      line-height: 20px;
      padding: 20px 0px;
   }

  </style>
  