<template> 
  <div class="index-page">
      <SearchBar></SearchBar>     
        <div class="list-container">
            <div class="headers">
               <h1>Trending</h1>
               <div class="trending-list">
                  <el-button @click="fetchTrending('day')" :class="{'active' : selectedTimeWindow ==='day'}" class="trend-link" type="primary" round>Today</el-button>
                  <el-button @click="fetchTrending('week')" :class ="{'active' :selectedTimeWindow === 'week'}" class="trend-link" type="primary" round>Week</el-button>
               </div>
            </div>
           
            <div class="movie-list">
               <el-row :gutter="10" v-for="(movie,index) in movies" :key="index">
                  <el-col
                     :key="index"
                     :lg="3"
                     :md="4"
                     :sm="12"
                     :xs="24">
                      <Movie
                       :id="movie.id"
                       :title="movie.title"
                       :poster="movie.poster_path"
                      ></Movie>
                  </el-col>
              </el-row>
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
      },
   },
   mounted(){
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
.movie-list{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:20px;
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
    color: white;
   
    border:none;
    cursor: pointer;

}
.trend-link.active{
   background-color:lightslategray ;
   color: white;
   padding:10px 22px;
   border-radius: 30px;
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