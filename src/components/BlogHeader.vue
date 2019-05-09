<template>
    <nav>
        <ul>
            <li>
                
                <router-link to="/"><el-button>博客</el-button></router-link>
            </li>
            <li>
                <router-link to="/addBlog"><el-button type="primary" plain>写博客</el-button></router-link>
            </li>
        </ul>
    </nav>
    
</template>

<script>
export default {
    name:"blog-header"
}
</script>
<style scoped>
nav{
    margin: 0 30px;
    padding: 10px 0;
}

ul{
    list-style: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 20px;
}
a{
    color: #333;
}
</style>


