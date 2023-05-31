import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import CartItem from "../cart/CartItem"
import CartTotal from "../cart/CartTotal"

const Checkout = () => {
    const [item, setItem] = useState()

    const getProduct = useCallback(async () => {
        const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/getItem/${1}`)
        if (resp.status === 200) setItem(resp.data)
        else toast("Something went wrong")
    })


    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="bg-gray-200/70 min-h-screen">
            <h2 className="text-4xl p-8 font-bold">Shopping Cart</h2>
            <div className="flex flex-col px-8 justify-between gap-12 lg:flex-row">
                <div className="md:w-full lg:w-2/3">
                    <CartItem item={item} />
                </div>
                <div className="lg:w-1/4">
                    <CartTotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
