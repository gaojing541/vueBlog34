<template>
  <div id="app">
    <el-container>
      <!-- <AddBlog></AddBlog>
      <ShowBlog></ShowBlog> -->
      <el-header>
        <blog-header></blog-header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
      
      
      
    </el-container>  
      
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    ShowBlog,
    AddBlog,
    BlogHeader
  }
}
</script>

<style>

</style>
