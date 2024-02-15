<template> 
  <div class="movie-page">
       <div class="back-arrow">
          <NuxtLink to="/" class="home-link"><i class="ri-arrow-left-line"></i></NuxtLink>
        </div>
        <div v-if ="movie" class="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
         <div class="movie-overview">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.overview }}</p>
            <p><strong>Popularity:</strong>{{ movie.popularity }}</p>
         </div>
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

@import 'remixicon/fonts/remixicon.css';

.movie-page{
   margin: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap:10px;
   position: relative;
}

.movie{
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   width: 80%;
   padding:20px;
   margin:10px;
}
.movie img{
  width: 360px;
  height: 500px;
  border-radius:20px ;
}
h3{
    font-size: 1.6rem;
    margin: 12px 0px;
}
.movie p{
   margin: 10px 20px;
   font-size: 1.3rem;
   line-height: 30px;
   letter-spacing: 0.7px;
}
.movie-overview{
    margin: 30px 40px;
}
.back-arrow{
   position: absolute;
   top: 20px;
   left:90px;
}
.home-link{
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
}
</style>