import './cart-item.styles.scss'

const CartItem = ({ item }) => {
    return (
        <div className="item-container">
            <img className='item-image' src={item.imageUrl} alt={item.name} />
            <div className="item-info">
                <p className='item-name'>{item.name}</p>
                <span className='item-count'>{item.count}</span>
            </div>
        </div>
    )
}

export default CartItem;