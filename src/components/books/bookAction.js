import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../firebase-config/firebaseConfig"
import { setBooks } from "./bookSlice"



export const addBookAction = (data)=>async(dispatch)=>{
try {
    const docRef = await addDoc(collection(db,"books"), data)
    console.log("hello", docRef.id)
    if(docRef.id){
        dispatch(setBooks(data))&&toast.success("book added successfully")
    }
    
} catch (error) {
    toast.error(error.message)
}

}