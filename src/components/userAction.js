import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { auth, db } from "./firebase-config/firebaseConfig"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"


export const createUserAction =async (data)=>{
    try {
        const userPending = createUserWithEmailAndPassword(auth,data.email, data.password)

       toast.promise(userPending,{
            pending:"Please wait"
        })
    const {user} = await userPending
    const obj = {
        name: data.fName,
        email: data.email,
        
        
    }
    
    await setDoc(doc(db,"users", user.uid),obj)
    toast.success("user Created, now redirecting to dashboard")
    return user
        
    } catch (error) {
        toast.error(error.message)
        
    }
    

}