<template> 
    <div class="result-page">
      <div class="back-arrow">
               <NuxtLink to="/" class="home-link"><i class="el-icon-d-arrow-left"></i></NuxtLink>
            </div>    
        <div class="headers">
            <h1> Movie's List</h1>
        </div>
        <div class="movie-lists">
            <el-table :data="movies" style="width:100%" border>
                <el-table-column prop="id" label="ID" />
                <el-table-column prop="title" label="Title" />
                <el-table-column prop="release_date" label="ReleaseDate" />
                <el-table-column prop="popularity" label="Popularity" />
                <el-table-column prop="vote_average" label="Vote Average" />
                <el-table-column prop="vote_count" label="Vote Count" />
            </el-table>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name:'ResultPage',
    computed:{
       ...mapGetters({
          movies:'getList'
       })
    }
}
</script>
  
  <style>
  .result-page{
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     position:relative;
  }
  .headers{
     display: flex;
     align-items: center;
    
     text-align: start;
     letter-spacing: 0.6px;
     margin: 30px 0px;
   
  }
 
  .movie-lists{
     width:82%;
     min-height: 600px;
     /* margin: 20px; */
     display: flex;
     align-items: center;
     /* justify-content: space-between; */
     overflow-y: auto;
  }
  
  .movies{
     display: flex;
     flex-direction: column;
     /* align-items: center; */
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
  .back-arrow{
   position: absolute;
   top: 40px;
   left:90px
  }
.home-link{
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
}
  </style>