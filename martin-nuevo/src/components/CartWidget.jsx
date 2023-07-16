import { Link } from "react-router-dom";
import carrocompra from "./images/carro-compra.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    
    return (
        (cartTotal() > 0) ?
        <Link className="btn btn-light position-relative" to={"/cart"}>
            <img src={carrocompra} alt={"carrocompra"} width={40} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "" 
    )
}

export default CartWidget;