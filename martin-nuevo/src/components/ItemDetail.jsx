import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { useContext } from "react";


const ItemDetail = ({producto}) => { 
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(producto, quantity);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={producto.imagen} alt={"producto.titulo"} className="img-fluid" />
                </div>

                <div className="col-md-3">
                    <h1>{producto.titulo}</h1>
                    <h3>{producto.descripcion}</h3>
                    <p><b>${producto.precio}</b></p>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;