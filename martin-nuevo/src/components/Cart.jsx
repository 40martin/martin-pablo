import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);
    
    return (
        <div>
            <h3>Cart</h3>
            <p>Total Producto: {cartTotal()}</p>
            <ul>
                {cart.map(items => <li>{items.titulo}</li>)}
            </ul>
        </div>
    )
}

export default Cart;