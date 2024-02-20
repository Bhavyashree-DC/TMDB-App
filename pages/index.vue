<template> 
  <div class="index-page">
      <SearchBar></SearchBar>     
        <div class="list-container">
          <div class="headers">
              <h1>Trending</h1>
              <div class="trending-list">
                  <button @click="fetchTrending('day')" :class="{'active' : selectedTimeWindow ==='day'}" class="trend-link">Today</button>
                  <button @click="fetchTrending('week')" :class ="{'active' :selectedTimeWindow === 'week'}" class="trend-link">Week</button>
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
  data(){
     return{
       selectedTimeWindow :'day',
     }
  },
  computed:{
     ...mapGetters({
        movies:'getList'
     })
  },
  methods:{
     fetchTrending(timeWindow){
          this.selectedTimeWindow = timeWindow
          this.$store.dispatch('fetchList',timeWindow)
     }
     
  },
  mounted() {
    this.fetchTrending('day');  // Fetch trending movies for the 'day' time window by default
  },
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
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   padding:2px 6px; 
   border-radius: 30px;
}
.trend-link {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(58, 58, 220);
   
    border:none;
    cursor: pointer;

}
.trend-link.active{
   background-color:rgb(58, 58, 220) ;
   color: white;
   padding:10px 22px;
   border-radius: 30px;
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
   padding:20px;
}

</style>