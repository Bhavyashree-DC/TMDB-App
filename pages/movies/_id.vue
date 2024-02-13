<template>
    <div class="movie-overview">
          <div class="back-arrow">
                <NuxtLink to="/" class="back">
                   <i class="ri-arrow-left-s-line"></i>
                </NuxtLink>
          </div>
          <div class="review">
            <img :src="moviePosterUrl(movie.poster_path)" alt="Movie Poster" />
            
            <div class="contents">
                <h1><b>Title:  {{ movie.title }} </b></h1>
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

 @import 'remixicon/fonts/remixicon.css';
   .movie-overview{
       width:70%;
       height: 90vh;
       margin: 50px auto;
       display: flex;
       align-items: flex-start;
       justify-content: flex-start;
       flex-direction: column;
       background-color: #F7EFE5;
       border-radius: 20px;
       box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   }
   .movie-overview .header{
       font-size: 1.3rem;
       font-weight: 600;
       text-align:center;
       margin: 30px;
       padding: 10px ;
   }
   .review{
      display: flex;
      align-self: flex-start;
      justify-content: center;
   }
   .review img{
      width: 400px;
      height: 620px;
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
      
   }
   .contents p{
      font-size: 24px;
      line-height: 20px;
      padding: 20px 0px;
      line-height: 1.2;
   }
   .back-arrow{
     display: flex;
     margin: 30px;

   }
  .back{
      width: 40px;
      height: 40px;
      background-color: #EEA5A6;
      border-radius: 20px;
      text-decoration: none;

      font-size: 36px;
      font-weight: 600;
  }
  .back :hover{
      color: #D04848;
  }
  </style>
  