<template>
    <div class="search-bar">
        <div class="header">
            <h1>{{ header }}</h1>
        </div>
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
        <div class="search-bar-input">
            <div class="search-button">
                <input type="text" placeholder=" Search for movies,tv shows,people ">
                <button>Search</button>
            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        name:'SearchBar',
        data(){
            return{
               header:'Welcome .',
               title:'Millions of movies, TV shows and people to discover. Explore now.'
            }
        }
    }
</script>

<style scoped>
.search-bar {
    width: 100%;
    min-height: 450px;
    background-color: rgb(204,204,204);
}
.header{
    font-size: 2rem;
    font-weight: 600;
    margin-left: 30px;
    padding: 50px 50px 10px 50px;
    color: white;
}
.title{
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-left: 30px;
    padding:10px 50px;
}
.search-bar-input {
    position: relative;
    display: flex;
    align-items: center;
    margin:50px 30px;
    padding: 30px 50px;
}

.search-button {
    position: relative;
    width: 100%; 
}

.search-bar-input input[type='text'] {
    width: calc(100% - 80px); 
    height: 70px;
    border-radius: 40px;
    padding: 8px 40px;
    border: none;
    outline: none;
    box-sizing: border-box;
}

::placeholder {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 50px;
}

.search-bar-input button {
    position: absolute;
    right: 70px;
    top: 50%; 
    transform: translateY(-50%);
    font-size: 24px;
    padding: 22px 38px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 40px;
    cursor: pointer;
}

.search-bar-input button:hover {
    background-color: #0056b3;
}

</style>