<template>
    <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px; font-size: 34px;">
        <el-radio-button :label="false">Home</el-radio-button>
        <el-radio-button :label="true">Favorite</el-radio-button>
    </el-radio-group>

<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> 
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-video-camera-solid"></i> 
      <span slot="title">Popular</span>
    </template>
    <el-menu-item-group>
      <span slot="title">Trending Movies</span>
      <el-menu-item index="1-1">Week</el-menu-item>
      <el-menu-item index="1-2">Day</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="TV Shows">
      <el-menu-item index="1-3">Popular Shows</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">Series</span>
      <el-menu-item index="1-4-1">Anime</el-menu-item>
      <el-menu-item index="1-4-2">Horror</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">More</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-s-custom"></i>
    <span slot="title">Log Out</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Setting</span>
  </el-menu-item>
</el-menu>
    </div>
</template>

<script>
    export default {
        name:'AsideBar',
    }
</script>

<style>
  .el-radio-button span{
     font-size: 18px;
     font-weight: 600;
     color: rgb(27, 104, 237);
 }

 .el-menu-item span{
    font-size: 20px;
    font-weight: 600;
 }
 .el-submenu__title span{
   font-size: 20px;
   font-weight: 600;
 }
 .el-menu-item-group__title{
     font-size: 16px;
 }
 .el-menu-item-group span{
     font-size: 16px;
     font-weight: 600;
     padding: 2px;
 }
 .el-menu-item li{
   font-size: 18px;
   font-weight: 600;
 }
 .el-menu-item-group li{
  font-size: 16px;
  
 }
</style>