<template>
    <NuxtLink :to="`/movies/${id}`" class="movieCard">
        <img :src="`https://image.tmdb.org/t/p/w500/${poster}`" alt="Poster">
        <h3>{{ title }}</h3>
    </NuxtLink>
</template>

<script>
    export default {
        name:"MovieCard",
        props:{
            id:Number,
            title:String,
            poster:String,
        }
    }
</script>
<style lang="scss" scoped>
  
</style>