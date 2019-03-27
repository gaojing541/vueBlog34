<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <div class="pubtime">
            <span class="author">作者：{{blog.author}}</span>
            <span class="categories" v-if="blog.categories">
                标签： 
                <span v-for="category in blog.categories" :key="category">
                    {{category}}
                </span>
            </span>
        </div>

        <article>{{blog.content}}</article>

<!--        
        <p>分类</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{category}}
            </li>
        </ul> -->
        <el-button @click="deleteSingleBlog">删除</el-button>
        
        <!-- <button @click="deleteSingleBlog">删除</button> -->
        <router-link :to="'/edit/' + id "><el-button>编辑</el-button></router-link>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{},
            
        }
    },
    created(){
        // this.$http.get('https://wd7747294513zslrqc.wilddogio.com/post/' + this.id + ".json")
            axios.get('/post/' + this.id + ".json")
            .then((data) => {
                console.log(data);
                //return data.json();
                return data.data;
                //this.blog = data.body;
            })
            //.then(function(data){
            .then((data) => {
                console.log(data);
                this.blog = data;
            })
    },
    methods:{
        deleteSingleBlog(){
            //this.$http.delete('https://wd7747294513zslrqc.wilddogio.com/post/' + this.id + ".json")
                axios.delete('/post/' + this.id + ".json")
                .then( response =>{
                    this.$router.push({path:'/'});
                })
        }
    }
}
</script>

<style scoped>
#single-blog{
    padding: 20px;
    background-color: #eee;
    border: solid 1px #ddd;
}
h1{
     padding: 6px 0 1px;
    font-size: 24px;
    color: #3c3c3c;
    line-height: 35px;
    text-align: center;
}
.pubtime {
    margin: 1px 0 9px;
    color: #c5c5c5;
    font-size: 12px;
}
.categories span{
    margin-left: 5px;
}
</style>


