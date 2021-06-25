<template>
    <div  class="blog">
        <div>
            <h3 @click="showBody=!showBody">{{blog.title}}</h3>
      
        </div>
        <div class="icons">
            <i class="fas fa-trash-alt"></i>
            <i class="far fa-edit"></i>
            <i class="fas fa-check" @click="check(blog.id)"></i>
        </div>
    </div>
     <p v-if="showBody">{{blog.body}}</p>
 
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from '../firebase/config';
import {useRouter} from 'vue-router'
export default {
    props:["blog"],
    setup(){
        let router=useRouter();
        let showBody=ref(false);
        let check=async(id)=>{
            let complete;
            let res=await db.collection("blogs").get();
            res.docs.map((doc)=>{
                if(doc.id===id){
                  complete= !doc.data().complete;
                }
            })
            await db.collection("blogs").doc(id).update({
                complete:complete
            });
            // router.push("/");

        }
        return{showBody,check};
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