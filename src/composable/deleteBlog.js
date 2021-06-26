import { ref } from "vue";
import { db } from "../firebase/config";


let trash=async(id)=>{
    try{
        await db.collection("blogs").doc(id).delete();
    }catch(err){
      console.log(err.message)
    }
}
let deleteBlog=()=>{
    return {trash};
}
export default deleteBlog;