import { useEffect, useState } from "react"
import axios from "axios"


export function useFetch(url){

    const [data , setData] = useState (null)
    const [loading , setLoading] = useState (true)
    const [error , setError] = useState (null)
   
    useEffect (() => {
        setLoading(true)
        setError (null)
    
        axios.get(url)
        .then(response =>{
            setData(response.data)
            setLoading(false)
        })
        .catch(err =>{
            setError('something went wrong. Pleae try again.')
        setLoading (false)
        })
    },[url])
    return{data , loading, error}

}

