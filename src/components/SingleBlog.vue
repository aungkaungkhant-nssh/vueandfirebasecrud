<template>
    <div  class="blog">
        <div v-if="error">
            {{error}}
        </div>
        <div>
            <h3 @click="showBody=!showBody">{{blog.title}}</h3>
      
        </div>
        <div class="icons" v-if="blog">
            <i class="fas fa-trash-alt" @click="blogDelete(blog.id)"></i>
            <router-link :to="{name:'Edit',params:{id:blog.id}}">
                    <i class="far fa-edit"></i>
            </router-link>
            <i class="fas fa-check" @click="complete(blog.id)"></i>
        </div>
    </div>
     <p v-if="showBody">{{blog.body}}</p>
 
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from '../firebase/config';
import {useRouter} from 'vue-router'
import updateBlogs from '../composable/updateBlogs'
import deleteBlog from '../composable/deleteBlog'
export default {
    props:["blog"],
    setup(){
        let {error,update}=updateBlogs();
        let {trash}=deleteBlog();
        let router=useRouter();
        let showBody=ref(false);
        let complete=async(id)=>{
            let complete;
            let res=await db.collection("blogs").get();
            res.docs.map((doc)=>{
                if(doc.id===id){
                  complete= !doc.data().complete;
                }
            })
             let condition={
                complete:complete
            }            
           await update(id,condition);
            

        };
        let blogDelete=async(id)=>{
           await trash(id);
            // await db.collection("blogs").doc(id).delete();
        }
        return{showBody,complete,blogDelete,error};
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