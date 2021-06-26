<template>
    <div class="container mt-5" style="width:500px">
      <div v-if="error">
        {{error}}
      </div>
        <form @submit.prevent="blogAdd">
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
import {db,timestamp} from '../firebase/config';
import {useRouter} from 'vue-router'
import addBlog from "../composable/addBlog"
export default {
    setup(){
      let router=useRouter();
      let {error,add}=addBlog();
      let title=ref("");
      let body=ref("");
      let blogAdd=async()=>{
         let newBlog={
           title:title.value,
            body:body.value,
            complete:false,
            create_at:timestamp()
         }
         await add(newBlog);
         router.push({name:"Home"});
      }
      return{title,body,blogAdd,error};
    }
}
</script>

<style>

</style>