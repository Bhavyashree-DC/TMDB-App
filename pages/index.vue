<template> 
  <div class="index-page">
   <SearchBar></SearchBar> 
     <h2>Movies page</h2>
     <div class="movies-list">
        <NuxtLink :to="`/movies/${movie.id}`" class="movies" v-for="(movie,index) in movies" :key="index">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
          <h3>{{ movie.title }}</h3>
        </NuxtLink>
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

.movies-list{
  margin: 20px;
   display: flex;
   flex-wrap: wrap;
   gap:10px;
}

.movies{
   width: 300px;
}
.movies img{
  width: 100%;
}
</style>