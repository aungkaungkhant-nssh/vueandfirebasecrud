import { ref } from "vue";
import { db } from "../firebase/config";

let error=ref("");
let update=async(id,detail)=>{
    try{
       await db.collection("blogs").doc(id).update(detail);
    }catch(err){
        error.value=err.message;
    }   

}
let updateBlogs=()=>{
    return {error,update}
}
export default updateBlogs;

