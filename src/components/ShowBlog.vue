<template>
    <div id="show-blogs">
        <el-input v-model="search" placeholder="搜索"></el-input>

        <!-- <h1>博客列表</h1> -->
        <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
            <router-link v-bind:to="'/blog/' + blog.id">
             <h2>{{blog.title | to-uppercase}}</h2>
             <!-- <h2 v-rainbow>{{blog.title | to-uppercase}}</h2> -->
              <article>
                {{blog.content | snippet}}
              </article>
            </router-link>
           
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import axios from '../axios-auth'
export default {
    name:'show-blogs',
    data(){
        return{
            blogs:[],
            search:""
        }
    },
    created(){
        //this.$http.get('http://jsonplaceholder.typicode.com/posts')
        //this.$http.get('https://myblog-b7151.firebaseio.com/posts.json')
        //this.$http.get('https://wd7747294513zslrqc.wilddogio.com/post.json')
        //axios.get('/post.json')
        axios.get('https://wd7747294513zslrqc.wilddogio.com/post.json')
        //this.$http.get("./../static/posts.json")
                  .then(function(data){
                      //console.log(data.json());
                      //return data.json();
                      return data.data;
                     //this.blogs = data.body.slice(0,10);
                     //console.log(data.data);
                     
                  })
                  //.then(function(data){
                  .then((data)=>{    
                      var blogsArray = [];
                      for(let key in data){
                          data[key].id = key;
                          blogsArray.push(data[key]);
                      }
                      //console.log(blogsArray);
                     this.blogs = blogsArray;
                     console.log("blogsArray:"+ blogsArray);
                  })  
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog) =>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
    //    "to-uppercase":function(value){
    //        return value.toUpperCase();
    //    }, 
       toUppercase(value){
           return value.toUpperCase();
       } 
    },
    directives:{
        "rainbow":{
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8);
            }
        }
    }
}
</script>
<style>
*{box-sizing: border-box;}
#show-blogs{ 
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin:  10px;
    background-color: #eee;
}
.single-blog h2{
    color: #333;
    font-size: 16px;
    font-weight: bold;
}
.single-blog article{
    color: #666;
    font-size: 14px;
}
</style>


