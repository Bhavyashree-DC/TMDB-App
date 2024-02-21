<template>
    <!-- <div class="movie-lists"> -->
        <NuxtLink class="movies" :to="`/movies/${id}`">
            <img :src="`https://image.tmdb.org/t/p/w500/${poster}`" alt="Poster">
            <h3>{{ title }}</h3>
        </NuxtLink>
    <!-- </div> -->
   
</template>

<script>
    export default {
         name:'Movie',
         props:{
             id:Number,
             title:String,
             poster:String,
         }
    }
</script>

<style  scoped>
.movies{
    width:200px;
}
.movies img{
    width:100%;
}
.movies h3{
    font-size: 20px;
}
</style>