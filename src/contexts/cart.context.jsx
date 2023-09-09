import { createContext, useState } from 'react'

export const CartContext = createContext({
    currentList: [],
    setCurrentList: () => null,
    total: 0,
    setTotal: () => null,
});

export const CartProvider = ({ children }) => {
    const [currentList, setCurrentList] = useState([]);
    const [total, setTotal] = useState(0);

    const value = { currentList, setCurrentList, total, setTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}