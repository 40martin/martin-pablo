import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock}) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);
    
    
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra</Link> : <button
                    type="button" className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;