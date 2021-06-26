<template>
   <div class="container mt-5" style="width:500px">
       <div v-if="blog">
            <form @submit.prevent="editBlog">
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
       <div v-else>
           <Loading></Loading>
       </div>
      

    </div>
</template>

<script>
import Loading from '../components/Loading'
import { onMounted, ref } from '@vue/runtime-core'
import { db } from '../firebase/config'
import updateBlogs from "../composable/updateBlogs"
import {useRouter} from 'vue-router'
export default {
  components: { Loading },
    props:["id"],
    setup(props){
        let blog=ref([]);
        let {error,update}=updateBlogs();
       let router=useRouter();
        let title=ref();
        let body=ref();
        onMounted(async()=>{
           let res=await db.collection("blogs").doc(props.id).get();
           blog.value={id:res.id,...res.data()}
            title.value=res.data().title;
            body.value=res.data().body;
        });
        let editBlog=async()=>{
            let blog={
                title:title.value,
                body:body.value
            }
            await update(props.id,blog);
            router.push("/");
        }
        return {blog,title,body,editBlog}
    }
}
</script>

<style>

</style>