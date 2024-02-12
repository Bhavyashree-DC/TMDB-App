<template>
  <div class="movies-container">
    <div class="header">
      <h1>Trending Movies</h1>
    </div>
    <ul class="lists">
      <li v-for="movie in movies" :key="movie.id">
        <nuxt-link :to="`/movies/${movie.id}`" class='links'>
          <div class="movies-list">
            <img :src="moviePosterUrl(movie.poster_path)" alt="Movie Poster" />
            <h4>{{ movie.title }}</h4>
            <p>{{ movie.release_date }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MoviesList',
  async fetch() {
    await this.$store.dispatch('movies/fetchMovies');
  },
  methods: {
    moviePosterUrl(poster_path) {
      const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
      return poster_path ? `${basePosterUrl}${poster_path}` : '';
    },
   
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies;
    },
  },
};
</script>
    <!-- //    data(){
    //       return{
    //         movies:[]
    //       }
    //    },
    //    async fetch(){
    //         const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
    //         const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
            
    //         try{
    //             const response = await axios.get(apiUrl);
    //             this.movies = response.data.results;
    //         }catch(e) {
    //           console.error(e);
    //         }
    //   },
    //   methods: {
    //       getMoviePosterUrl(posterPath) {
    //         const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
    //         return posterPath ? `${basePosterUrl}${posterPath}` : '';
    //       }
    //    }
    }
           
  </script> --> 

<style scoped>
.movies-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 86%;
    height: 100%;
    padding: 10px;
    margin: 0 auto;
    overflow-x: auto;
}
.header{
    font-size: 18px;
    font-weight: bold;
    margin: 30px 0px;
}
.lists{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap:20px;
   
    list-style: none;
}
.links{
  text-decoration: none;
  color: black;
  font-size: 25px;
}
.lists img{
    width: 250px;
    height: 340px;
    border-radius: 20px;
}
.movies-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
}
.details h4{
    font-size: 24px;
    font-weight: bold;
    list-style: none;
}
.details p{
    font-size: 20px;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
}
</style>
  