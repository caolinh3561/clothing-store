import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-container.styles.scss";
import CartItem from "./cart-item/cart-item.component";

const CartContainer = ({ isCartShowing }) => {
    const { currentList } = useContext(CartContext);
    console.log(currentList)

    const renderCartItems = () => {
        return currentList.map((item) => {
            return <CartItem key={item.id} item={item} />
        })
    }

    return (
        <div
            className="cart-container"
            style={{
                display: isCartShowing ? "block" : "none",
            }}
        >
            {renderCartItems()}
        </div>
    )
}

export default CartContainer;