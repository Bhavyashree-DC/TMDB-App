<template> 


<el-container>
  <el-header>
     <NavBar></NavBar>
  </el-header>
  <el-container>
    <el-aside width="300px" height="100vh">
       <AsideBar></AsideBar>
    </el-aside>
    <el-container>
      <el-main>
         <Nuxt/>
      </el-main>
      <el-footer>
         <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
   <!-- <div class="container">
      <NavBar></NavBar> 
      <Nuxt />
      <Footer></Footer>
   </div> -->
  
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
.el-aside{
   margin-top: 50px;
   margin-left: 20px;
}
.container{
   width: 100%;
   height: 100vh;
}
</style>