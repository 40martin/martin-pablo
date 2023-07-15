import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {item, quantity:quantity}]);
        }

    };

    const removeItem = (Id) => {
        const items = cart.filter(product => product.Id !== Id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (Id) => {
        return cart.some(product => product.Id === Id);
    };

    const cartTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    };

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;