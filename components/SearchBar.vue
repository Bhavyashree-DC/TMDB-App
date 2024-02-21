<template>
    <div class="search-container">
        <div class="search-content">
            <div class="header">
                <h1>{{ header }}</h1>
            </div>
            <div class="title">
                <h2>{{ title }}</h2>
            </div>
            <div class="search-bar-input">
                <div class="search-button">
                    <el-input
                        placeholder="Search Movie,TV..."
                        prefix-icon="el-icon-search"
                        v-model="query"
                        @onChange="searchQuery"
                     >
                    </el-input>
                    <!-- <button >Search</button> -->
                </div>
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
               title:'Millions of movies, TV shows and people to discover. Explore now.',
               query:'',
            }
        },
        methods:{
            searchQuery(value){
                if(value && value !== null){
                      this.$store.dispatch('searchMovie')
                }
                else{
                    this.$message.warning("please enter a text to search...")
                }
            }
        }
    }
</script>
<style scoped>
.search-container {
    width: 86%;
    height: 500px; 
    margin: 0 auto; 

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: url('../static/background.jpg') no-repeat;
    background-size: cover;
 
}
.search-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    /* min-height: 450px;
    background: rgba(0, 0, 0, 0.5); */
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
    margin: 50px 30px;
    padding: 30px 50px;
    width: 100%; 
}

.search-button {
    position: relative;
    width: 100%;
}

.search-bar-input::v-deep el-input {
    width: 90%;
    height: 70px;
    border-radius: 40px;
    padding: 28px 40px;
    margin-right: 50px;
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
    font-weight: 600;
    padding: 22px 38px;
    border: none;
    background: linear-gradient(to right,rgba(30,213,169) 0%,rgba(1,180,228) 100%);
    color: #fff;
    border-radius: 40px;
    cursor: pointer;
}

.search-bar-input button:hover{
    color: black;
}
</style>