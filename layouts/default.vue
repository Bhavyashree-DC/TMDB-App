<template> 
   <div class="container">
      <NavBar></NavBar> 
      <Nuxt />
      <Footer></Footer>
   </div>
  
</template>
<script>
export default{
   name:'AppLayout',
   
}
</script>
<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
.container{
   width: 100%;
   height: 100vh;
}
</style>