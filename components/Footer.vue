<template>
    <div class="footer-container">
       <div class="menu">
            <div class="logo">
                <img src="../static/logo.jpg" alt="logo">
            </div>
            <div class="menu-lists">
                <div class="about-TMDB">
                    <h2>Basics</h2>
                    <NuxtLink to="/" class="link">About TMDB</NuxtLink>
                    <NuxtLink to="/" class="link">Contact Us</NuxtLink>
                    <NuxtLink to="/" class="link">Support Forums</NuxtLink>
                    <NuxtLink to="/" class="link">API </NuxtLink>
                </div>
                <div class="get-involved">
                    <h2>Get Involved</h2>
                    <NuxtLink to="/" class="link">Contribution Bible</NuxtLink>
                    <NuxtLink to="/" class="link">Add new Movie</NuxtLink>
                    <NuxtLink to="/" class="link">Add New TV Show</NuxtLink>
                </div>
                <div class="legal">
                    <h2>Legal</h2>
                    <NuxtLink to="/" class="link">Terms of Use</NuxtLink>
                    <NuxtLink to="/" class="link">API Terms of Use</NuxtLink>
                    <NuxtLink to="/" class="link">Privacy Policy</NuxtLink>
                    <NuxtLink to="/" class="link">DMCA Policy </NuxtLink>
                
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'Footer',

    }
</script>

<style scoped>
   .footer-container{
       width:100%;
       height: 300px;
       background-color: rgb(3,37,65);

       display: flex;
       align-items: center;
       justify-content: center;
       letter-spacing: 1px;

   }
   .menu{
      display: flex;
      align-items: center;
      justify-content:space-between;

      gap:20px;
   }
   .logo img{
      width: 100%;
      height: auto;
   }
    .menu-lists{
         display: flex;
         align-items: center;
         justify-content: flex-start;
         gap:20px;

    }
   .about-TMDB h2,
   .legal h2,
   .get-involved h2{
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      color: white;
      text-align: center;
   }
   .about-TMDB,
   .get-involved,
   .legal{
       margin:10px;
       display: flex;
       flex-direction: column;
       align-items: center;
       
       line-height: 36px;
       /* padding:10px; */
   }
  
   .link{
    text-align: justify;
     text-decoration: none;
     font-size: 23px;
     font-weight: 600;
     color: white;

   }
</style>
