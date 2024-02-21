<template> 
  <div class="movie-page">
       <div class="back-arrow">
          <NuxtLink to="/" class="home-link"><i class="el-icon-d-arrow-left"></i></NuxtLink>
        </div>
        <div v-if ="movie" class="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
         <div class="movie-overview">
            <h1>{{ movie.title }}</h1>
            <h5><strong>Original Language:</strong>{{ movie.original_language }}</h5>
            <h6><strong>Release Date:</strong>{{ movie.release_date }}</h6>
            <p><strong>Overview:</strong>{{ movie.overview }}</p>
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
        movie:'getData'
     })
  },
  mounted(){
      this.$store.dispatch('fetchData',this.$route.params.id)
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
   position: relative;
}

.movie{
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   width: 80%;
   height: 100vh;
   padding:20px;
   margin:10px;
}
.movie img{
  width: 360px;
  height: 500px;
  border-radius:20px ;
}
h1{
    font-size: 1.8rem;
    margin: 15px 22px;
}
.movie p{
   margin: 10px 20px;
   font-size: 1.4rem;
   line-height: 28px;
   letter-spacing: 0.7px;
}
.movie-overview{
    margin: 30px 40px;
}
.movie h3,
.movie h5,
.movie h6{
    margin: 24px 25px;
    font-size: 18px;
    line-height: 26px;
}
.back-arrow{
   position: absolute;
   top: 20px;
   left:50px;
}
.home-link{
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
}
</style>