<template>
    <div @click="showBody=!showBody" class="blog">
        <div>
            <h3>{{blog.title}}</h3>
      
        </div>
        <div class="icons">
            <i class="fas fa-trash-alt"></i>
            <i class="far fa-edit"></i>
            <i class="fas fa-check"></i>
        </div>
    </div>
     <p v-if="showBody">{{blog.body}}</p>
 
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:["blog"],
    setup(){
        let showBody=ref(false);
        return{showBody};
    }
}
</script>

<style>
.blog{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icons i{
    margin-left: 30px;
    color:#2c3e50;
    font-size: 20px;
    cursor: pointer;
}
</style>