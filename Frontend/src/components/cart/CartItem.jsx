import CartCard from "../layouts/CartCard"

const CartItem = ({ item }) => {
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
