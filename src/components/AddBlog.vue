<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="" v-if="!submmited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required>

      <label for="">博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label for="">vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for="">Aangular4.js</label>
        <input type="checkbox" value="Aangular4.js" v-model="blog.categories">
        
        <p for="">作者</p>
        <select name="" id="" v-model="blog.author">
          <option v-for="author in authors" :key="author">
            {{author}}
          </option>
        </select>

        <button v-on:click.prevent="post">添加博客</button>
      </div>
    </form>
    
    <div v-if="submmited">
      <h3>你的博客发送成功！</h3>
    </div>

    <hr>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>

      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>

      <p>作者：{{blog.author}}</p>

    </div>
  </div>  
</template>

<script>
import axios from "axios"
export default {
  
  //模拟数据json： http://jsonplaceholder.typicode.com/posts
  name:"add-blog",
  data(){
    return{
      blog:{
        title:"博客标题",
        content:"",
        categories:[],
        author:''
      },

      authors:["v_llluo","v_jinggao"],

      submmited:false
    }
  },
  methods:{
    post:function(){
      //this.$http.post("http://jsonplaceholder.typicode.com/posts",
      // this.$http.post('https://myblog-b7151.firebaseio.com/posts.json',
      //this.$http.post('https://wd7747294513zslrqc.wilddogio.com/post.json',
      //var _this = this; 不用_this 改用ES6箭头函数 

      
      axios.post('/post.json',this.blog)
        //.then(function(data){ 
        .then((data) => {  //不用_this 改用ES6箭头函数
          console.log(data);
          //_this.submmited = true;
          this.submmited = true;
        })
    }
  }
}



</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
#checkboxes{
  padding: 10px 0;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 0;
}
button{
  display: block;
  margin: 20px 0;
  padding: 10px;
  background: crimson;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
}
#preview{
  padding: 10px 20px;
  border: solid 1px #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}

</style>
