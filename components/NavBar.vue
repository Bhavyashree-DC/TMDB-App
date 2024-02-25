<template>
  
<el-menu
  class="el-menu"
  mode="horizontal"
  @select="handleSelect"
  background-color="rgb(3,37,65)"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item><img src="../static/logo.jpg" alt="logo"></el-menu-item>
 <!-- <el-menu-item index="1"></el-menu-item>  -->
  <el-submenu index="1">
      <template  slot="title">Movie</template>
      <el-menu-item index="1-1">Popular</el-menu-item>
      <el-menu-item index="1-2">Now Playing</el-menu-item>
      <el-menu-item index="1-3">Upcoming</el-menu-item>
      <el-menu-item index="1-4">Top Rated</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
      <template  slot="title">TV Shows</template>
      <el-menu-item index="2-1">Popular</el-menu-item>
      <el-menu-item index="2-2">Airing Today</el-menu-item>
      <el-menu-item index="2-3">On TV</el-menu-item>
      <el-menu-item index="2-4">Top Rated</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">Popular</template>
      <el-menu-item index="3-1">Popular People</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
      <template  slot="title">More</template>
      <el-menu-item index="4-1">Discussion</el-menu-item>
      <el-menu-item index="4-2">LeaderBoard</el-menu-item>
      <el-menu-item index="4-3">Support</el-menu-item>
      <el-menu-item index="4-4">API</el-menu-item>
  </el-submenu>
   <!-- <el-menu-item>Log In</el-menu-item>  -->

   <el-input
      placeholder="Type something"
      v-model="input4">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>

  <!-- <el-button type="primary" round>SELECTED MOVIE</el-button> -->
  

</el-menu> 



        <!-- <div class="nav-logo-links">
            <div class="logo">
                <img src="../static/logo.jpg" alt="logo">
            </div>
            <div class="menu">
                <ul>
                    <NuxtLink class="link" to="/">Movies</NuxtLink>
                    <NuxtLink class="link" to="/">TV Shows</NuxtLink>
                    <NuxtLink class="link" to="/">People</NuxtLink>
                    <NuxtLink class="link" to="/">More</NuxtLink>
                </ul>
            </div>
        </div>
        <div class="icons">
            <i class="ri-add-fill"></i>
            <div class="lang">
                <h3>EN</h3>
            </div>
            <i class="ri-notification-2-line"></i>
            <i class="ri-search-line"></i>
        </div> -->
  <!-- </div> -->
</template>

<script>
    export default {
        name:'NavBar',
     
    }
</script>

<style scoped>

@import 'remixicon/fonts/remixicon.css';

  .el-menu{
     padding:20px;
  }
  .el-menu--horizontal {
    font-size: 2rem;
    font-weight: 600;
  }
 .el-menu-item li{
   
 }
  .el-submenu__title{
      font-size: 1.5rem;
  }
  .el-menu-item{
     font-size: 1.1rem;
  }

  .el-menu-item img{
    width: 120px;
    height: 68px;
  }

  .el-input{
     margin-left: 40%;
     padding:10px 0px;
     width: 28%;
  }
   
  /* .nav-logo-links{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 50px;
      border-radius: 10px;
  }
  .nav-bar .logo img{
    padding: 10px 30px;
    width: 190px;
    height:100px
  }

  .nav-bar .link{
     text-decoration: none;
     color: white;
     font-size: 28px;
     font-weight: 600;
     padding: 20px 34px;
  }
  
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    font-size: 36px;
    font-weight: 600;
    padding: 20px 90px 20px 80px;
    color: white;
    cursor: pointer;
  }
  .lang{
    font-size: 16px;
    font-weight: 600;
    padding: 0px 8px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
  }
  .ri-search-line{
    color: rgb(93, 208, 202);
  } */
</style>