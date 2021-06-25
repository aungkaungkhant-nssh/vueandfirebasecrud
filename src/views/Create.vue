<template>
    <div class="container mt-5" style="width:500px">
        <form @submit.prevent="addBlog">
            <div class="mb-3">
              <label for="" class="form-label">Title:</label>
              <input type="text" class="form-control" v-model="title">

            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Body:</label>
              <input type="text" class="form-control" v-model="body">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
       </form>

    </div>
 
</template>

<script>
import { ref } from '@vue/reactivity';
import {db} from '../firebase/config'
export default {
    setup(){
      let title=ref("");
      let body=ref("");
      let addBlog=async()=>{
         let newBlog={
           title:title.value,
            body:body.value,
            complete:false
         }
         let res=await db.collection("blogs").add(newBlog);
      }
      return{title,body,addBlog};
    }
}
</script>

<style>

</style>