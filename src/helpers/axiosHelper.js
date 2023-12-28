import axios from "axios";

export const fetchData = async(movieName)=>{
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=7d7f6780`

    try {
        const {data} = await axios.get(url)
        return data
        
    } catch (error) {
        console.log(error)
        
    }


}