<template>
    <div class="movie-details">
            <div class="title">
                <h1>{{ movie ? movie.title : 'Movie Not Found' }}</h1>
            </div>
            <div class="movie-overview">
                <div class="movie-poster">
                    <img :src="movie ? getMoviePosterUrl(movie.poster_path) : ''" alt="Movie Poster" />
                </div>
                <div class="overview">
                    <p v-if="movie"><strong>Overview:</strong> {{ movie.overview }}</p>
                    <p v-if="movie"><strong>Language</strong> {{ movie.original_language }}</p>
                    <p v-if="movie"><strong>Popularity</strong> {{ movie.popularity }}</p>
                    <p v-if="movie"><strong>Vote:</strong> {{ movie.vote_count }}</p>
                    <p v-if="movie"><strong>Release Date:</strong> {{ movie.release_date }}</p>
                </div>
            </div>
            <div class="back-arrow">
               <NuxtLink class="back" to="/"> 
                <i class="ri-arrow-left-fill"></i>
               </NuxtLink>
            </div>
    </div>  
</template>

  <script>

  import 'remixicon/fonts/remixicon.css';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movie: null,
      };
    },
    async created() {
        const movieId = this.$route.params.id; // retrieve the id from current route
        try {
            const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
            const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

            const response = await axios.get(apiUrl);
            
            // Check if response.data is not null or undefined
            if (response.data) {
            this.movie = response.data;
            } else {
            console.error('Movie details not found');
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    },
    methods: {
      getMoviePosterUrl(posterPath) {
        const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
        return posterPath ? `${basePosterUrl}${posterPath}` : '';
      },
    },
  };
  </script>
  
  <style scoped>
    .movie-details {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #cfead9;
        height: 100vh;
    }
    .title{
        font-size: 28px;
        font-weight: 600;
        padding:20px;
        margin-bottom: 20px;
    }
    .movie-overview{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin: 20px 100px;
    }
    .movie-overview img{
        width:380px;
        height: 460px;
        border-radius: 20px;
    }
    .overview{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:20px;
        padding: 20px 30px;
        font-size: 26px;
        line-height: 40px;
        margin: 20px 30px;
    }
    .back-arrow{
        display: flex;
        align-items: center;
        padding: 20px;
        margin: 20px 100px;
    }
    .back{
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        font-size: 30px;
        color: #000000;
        text-decoration: none;
    }
  </style>
  