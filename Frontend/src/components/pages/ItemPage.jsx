import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ItemPage = () => {
  const params = useParams()

  const getProduct = useCallback(async()=>{
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/getItem/${params.id}`)
  },[])

  useEffect(()=>{
    getProduct();
    console.log("hello")
  },[])

  return (
    <div>
      <h2>Item</h2>
    </div>
  )
}


export default ItemPage
