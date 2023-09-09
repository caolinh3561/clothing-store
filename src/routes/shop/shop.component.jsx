import ShopItem from "../../components/shop-item/shop-item.component";
import shopData from "./../../assets/shop-data.json";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <div className="shop-container">
      {shopData.map((item) => {
        return (
          <ShopItem key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default Shop;
