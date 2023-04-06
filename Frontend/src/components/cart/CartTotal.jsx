import Button from "../common/Button"

const CartTotal = () => {
    return (
        <div className="bg-white rounded-lg h-full w-full p-4 shadow-lg">
            <h2 className="text-lg font-bold border-b-2 border-black">
                Total
            </h2>
            <div className="flex justify-between mt-4">
                <p>Total Items:</p>
                <span>12</span>
            </div>
            <div className="flex justify-between my-4">
                <p>Total Payable Amount:</p>
                <span>1200</span>
            </div>
            <Button text="Pay" className="w-full py-2 text-lg" />
        </div>
    )
}

export default CartTotal
