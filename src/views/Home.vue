<template>
  <div class="home">
      <div class="container w-50 mt-5">
          <div v-if="blogs.length>0">
              <div v-for="blog in blogs" :key="blog.id" class="blogs"   :class="{complete:blog.complete===true}">
                  <SingleBlog :blog="blog"></SingleBlog>
              </div>
          </div>
          <div v-else>
              <Loading></Loading>
          </div>
      </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import SingleBlog from '../components/SingleBlog'
import { onMounted, ref } from '@vue/runtime-core'
import { db } from '../firebase/config'
// @ is an alias to /src


export default {
  components: {
    Loading, SingleBlog },
  setup(){
    let blogs=ref([]);
    
    onMounted(async()=>{
      await db.collection("blogs").orderBy('create_at').onSnapshot((snap)=>{
          blogs.value=snap.docs.map((doc)=>{
              return {id:doc.id,...doc.data()}
          })    
      });
     
    })
    return {blogs}
  }
}
</script>
<style>
.blogs{
  background-color: #ecf0f1;
  padding: 16px 28px;
  border-radius: 10px;
  margin-top: 40px;
  color:indigo;
    border-left: 5px solid #e74c3c;
}
h3{
  cursor: pointer;
}
p{
  color:#000;
  margin-top: 10px;
}
.complete{
     border-left: 5px solid #2ecc71;
}

</style>