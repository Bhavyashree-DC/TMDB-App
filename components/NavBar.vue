<template>
     <div class="nav-bar">
        <div class="nav-logo-links">
            <div class="logo">
                <img src="../static/logo.jpg" alt="logo">
            </div>
            <div class="menu">
                <ul>
                    <NuxtLink class="link" to="">Movies</NuxtLink>
                    <NuxtLink class="link" to="">TV Shows</NuxtLink>
                    <NuxtLink class="link" to="">People</NuxtLink>
                    <NuxtLink class="link" to="">More</NuxtLink>
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
        </div>
    </div>
</template>

<script>
    export default {
        name:'NavBar',
     
    }
</script>

<style scoped>

@import 'remixicon/fonts/remixicon.css';

   .nav-bar{
     min-width:100%;
     height:50px;
     background-color: rgb(3,37,65);
     color: white;

     display: flex;
     justify-content: space-between;
     align-items: center;

     font-size: 20px;
     font-weight: 600;
     padding: 50px 0px;
  }

  .nav-logo-links{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 50px;
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
  }
  .lang{
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
  }
  .ri-search-line{
    color: rgb(93, 208, 202);
  }
</style>