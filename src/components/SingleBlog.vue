<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{category}}
            </li>
        </ul>
        <button @click="deleteSingleBlog">删除</button>
        <router-link :to="'/edit/' + id ">编辑</router-link>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{} 
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
</style>


