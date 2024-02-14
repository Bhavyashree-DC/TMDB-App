<template> 
  <div class="movie-page">
        <div v-if ="movie" class="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.overview }}</p>
        </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  name:'MoviePage',
  computed:{
     ...mapGetters({
        movie:'movies/getData'
     })
  },
  mounted(){
      this.$store.dispatch('movies/fetchData',this.$route.params.id)
   }
}
</script>
<style>

.movie-page{
   margin: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap:10px;
}

.movie{
   width: 500px;
   padding:20px;
   margin:10px;
 
}
.movie img{
  width: 100%;
  height: 500px;
}
.movie p{
   font-size: 1.3rem;
   line-height: 1.3em;

}
</style>