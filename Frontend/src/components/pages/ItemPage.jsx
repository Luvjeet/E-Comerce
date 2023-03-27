import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "../common/Button"
import axios from "axios"

const ItemPage = () => {
  const params = useParams()
  const [item, setItem] = useState([])

  const getProduct = useCallback(async () => {
    const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/getItem/${params.id}`)
    if (resp.status === 200) setItem(resp.data)
    else toast("Something went wrong")
  }, [])

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className="w-full h-screen">
      <figure className="h-96 w-full">
        <img src={`${import.meta.env.VITE_BASE_URL}${item?.image}`} alt="" className="h-full w-full object-contain" />
      </figure>
      <figcaption className="p-8">
        <div className="flex justify-between text-xl mb-3">
          <p className="font-semibold text-3xl">{item?.productName}</p>
          <div className="flex gap-8">
            <Button
              text="Buy Now"
              className="px-3 py-1 text-sm"
            />
            <Button
              text="Add To Cart"
              className="px-3 py-1 text-sm"
            />
          </div>
        </div>
        <div className="text-lg">
          Price:<b> ₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item?.price)}</b>
        </div>
        <div className="text-left mt-2">
          {item?.desc}
        </div>
      </figcaption>
    </div>
  )
}


export default ItemPage
