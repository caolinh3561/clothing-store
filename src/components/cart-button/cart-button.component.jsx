import { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg'
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartContainer from "../cart-container/cart-container.component";

const CartButton = () => {
    const { total } = useContext(CartContext);
    const [isCartShowing, setIsCartShowing] = useState(false);
    const cartDivRef = useRef(null);

    const handleCartToggle = () => {
        setIsCartShowing(!isCartShowing);
    };

    const closeCartContainer = (event) => {
        if (isCartShowing && !cartDivRef.current.contains(event.target)) {
            setIsCartShowing(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeCartContainer);
        return () => {
            document.removeEventListener("click", closeCartContainer);
        };
    }, [isCartShowing]);

    return (
        <div className="nav-link shopping-bag-container" ref={cartDivRef}>
            <Link onClick={handleCartToggle}>
                <ShoppingBag className="shopping-bag" />
                <span className="shopping-bag-number">{total}</span>
            </Link>
            <CartContainer isCartShowing={isCartShowing} />
        </div>
    );
};

export default CartButton;
