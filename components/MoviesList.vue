<template>
    <div class="movies-container">
        <div class="header">
            <h1>Trending Movies</h1>
        </div>
        <ul class="lists">
            <li v-for="movie in movies" :key="movie.id">
                <NuxtLink :to="getMovieDetailsRoute(movie.id)">
                    <div class="details">
                        <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
                        <h4>{{ movie.title }}</h4>
                        <p>{{ movie.release_date }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
  </template>
  
  <script>

  import axios from 'axios';
  
  export default {
    data() {
      return {
        movies: [],
      };
    },
    async fetch() {
      const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
      const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  
      try {
        const response = await axios.get(apiUrl);
        this.movies = response.data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    methods: {
      getMoviePosterUrl(posterPath) {
        const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
        return posterPath ? `${basePosterUrl}${posterPath}` : '';
      },
      getMovieDetailsRoute(id) {
      console.log(`Redirecting to /movies/${id}`);
      return `/movies/${id}`;
    },
    },
  };
  </script>

<style scoped>
.movies-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 20px;
    overflow-x: auto;
}
.header{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.lists{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap:20px;
   
    list-style: none;
}
.lists img{
    width: 250px;
    height: 340px;
    border-radius: 20px;
}
.details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.details h4{
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    list-style: none;
}
.details p{
    font-size: 20px;
    font-weight: 500;
    padding: 8px;
    list-style: none;
    text-decoration: none;
}
</style>
  