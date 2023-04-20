import { useDispatch, useSelector } from "react-redux";
import CartCard from "../layouts/CartCard"
import { useCallback, useEffect } from "react";
import { addToCartApi, getCart } from "../../store/slices/cartSlice";

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart ?? [])
    const { userId } = useSelector((state) => state.auth ?? undefined)

    const AddToCartHandler = useCallback(async () => {
        //if (userId !== undefined) {
        //    const data = {
        //        items: cart,
        //    }
        //    dispatch(addToCartApi(data))
        //} else {
        //    console.log("Luvjeet")
        //}
        dispatch(getCart())
    }, [])

    useEffect(() => {
        AddToCartHandler()
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-lg">
            <CartCard
                name={item?.productName}
                image={item?.image}
                price={item?.price}
                id={item?.id}
                category={item?.category}
                desc={item?.desc}
            />
        </div>
    );
}

export default CartItem
