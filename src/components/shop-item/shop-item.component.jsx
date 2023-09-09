import "./shop-item.styles.scss";
import FormButton from "../form-button/form-button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ShopItem = ({ item }) => {
    const { currentList, setCurrentList, total, setTotal } = useContext(CartContext);

    const handleAddItem = (item) => {
        var newList = [...currentList];
        item = { ...item, count: 1 }
        const index = currentList.findIndex((ele) => ele.id === item.id);
        if (index > -1) {
            newList[index].count++;
        } else {
            newList.push(item);
        }
        setCurrentList(newList);
    }

    const handleButtonClick = (item) => {
        setTotal(total + 1);
        handleAddItem(item);
    };
    return (
        <div className="shop-item-container">
            <img className="shop-item-image" src={item.imageUrl} alt={item.name} />
            <FormButton
                buttonClass="shop-item-button"
                buttonType="inverted"
                inputOptions={{
                    onClick: (() => handleButtonClick(item))
                }}
            >
                Add to Cart
            </FormButton>
            <div className="item-info">
                <h3 className="shop-item-name">{item.name}</h3>
                <span className="shop-item-price">{item.price}</span>
            </div>
        </div>
    );
};

export default ShopItem;
