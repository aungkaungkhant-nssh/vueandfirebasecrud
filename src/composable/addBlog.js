const { ref } = require("vue");
import {db} from '../firebase/config';
let error=ref("");
let add=async(newBlog)=>{
    try{
        return await db.collection("blogs").add(newBlog);
    }catch(err){
        error.value=err.message;
    }
}
let addBlog=()=>{
    return{error,add}
}
export default addBlog;