import { useState } from "react"

const CartCard = ({ name, price, image, id, category, desc }) => {

    const [qty, setQty] = useState(1)

    return (
        <div className="flex flex-col md:flex-row justify-between p-4">
            <div className="w-full h-56 md:h-full md:w-1/2">
                <img
                    src={`${import.meta.env.VITE_BASE_URL}${image}`}
                    className="w-full h-full object-contain" />
            </div>
            <div className="w-full md:w-1/2 mt-6 flex flex-col justify-between gap-12">
                <div className="flex">
                    <div className="w-full">
                        <h2 className="text-xl mb-2">{name}</h2>
                        <p className="text-gray-500 mb-2"><b>Category:</b> {category}</p>
                        {/*
                        <p>{desc}</p>
                    */}
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Qty:</span>
                        <select
                            className="px-2 py-1 border-2 border-gray-300 rounded-lg outline-0"
                            onChange={(e) => setQty(e.target.value)}
                        >
                            {Array.from({ length: 10 }, (_, i) => i + 1)
                                .map((e) => (
                                    <option key={e} vlaue={e} className="!border-0 !mx-2 !my-1 ">
                                        {e}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className="border-t-2 border-black text-right flex justify-between">
                    <p>{qty > 1 ? `SubTotal (${qty} items):` : `SubTotal (${qty} item):`}</p>
                    <p>₹{new Intl
                        .NumberFormat('en-IN', { maximumSignificantDigits: 3 })
                        .format(price)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartCard
