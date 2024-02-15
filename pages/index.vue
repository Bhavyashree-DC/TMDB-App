<template> 
  <div class="index-page">
      <SearchBar></SearchBar>     
        <div class="list-container">
          <div class="headers">
              <h1>Trending</h1>
              <div class="trending-list">
                <NuxtLink to="`/trending/day`" class="trend-link">Today</NuxtLink>
                <NuxtLink to="`/trending/week`" class="trend-link">Week</NuxtLink>
              </div>
          </div>
          <div class="movie-lists">
              <NuxtLink :to="`/movies/${movie.id}`" class="movies" v-for="(movie,index) in movies" :key="index">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
                <h3>{{ movie.title }}</h3>
              </NuxtLink>
            </div>
        </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  name:'IndexPage',
  computed:{
     ...mapGetters({
        movies:'movies/getList'
     })
  },
  mounted(){
      this.$store.dispatch('movies/fetchList')
   }
}
</script>
<style>
.list-container{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}
.headers{
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap:20px;
   text-align: start;
   letter-spacing: 1px;
   margin-top: 30px;
}
.trending-list{
   display: flex;
   gap:30px;
   border: 1px solid black;
   border-radius: 30px;
   padding:10px 40px;

}
.trend-link{
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(176, 11, 176);
}
.movie-lists{
  width:82%;
   margin: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap:10px;
   overflow-x: auto;
}

.movies{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap:18px;
   text-decoration: none;
}
.movies img{
  width: 260px;
  height:380px;
  border-radius: 20px;
}
.movies h3{
   font-size: 1.5rem;
   font-weight: 600;
   color: black;
   padding:10px;
}
</style>