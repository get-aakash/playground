import { addDoc, collection, getDocs, query } from "firebase/firestore"
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

export const getBookAction  = ()=>async(dispatch)=>{
    try {

        let bks = []
        const q = query(collection(db, "books"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            bks.push(data)
        })

        dispatch(setBooks(bks))


    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }

}