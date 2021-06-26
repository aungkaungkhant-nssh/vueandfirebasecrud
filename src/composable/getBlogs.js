import { ref } from 'vue'
import { db } from '../firebase/config'
let getBlogs=()=>{
    let blogs=ref([]);
    let error=ref("");
    let load=async()=>{
        try{
            await db.collection("blogs").orderBy('create_at').onSnapshot((snap)=>{
                blogs.value=snap.docs.map((doc)=>{
                    return {id:doc.id,...doc.data()}
                })  
            })
        }catch(err){
            error.value=err.message;
        }
    }
  
   return {error,load,blogs}
}   
export default getBlogs;
