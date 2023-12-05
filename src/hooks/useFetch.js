// custom hooks - function

import { useEffect,useState } from "react"

const useFetch = (url) => {
const [data, setData] = useState(null)
    useEffect(() => {
        fetch(url).then(res=>
            res.json().then(results=>{
                setData(results.products)
            }))
    },[])
    return data
}

export default useFetch