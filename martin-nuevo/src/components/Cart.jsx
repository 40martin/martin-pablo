import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                    </div>
                </div>
            </div>  
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados en su Compra</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                    {
                        cart.map(item => (
                            <tr>
                                <td><img src={item.imagen} alt={"item.titulo"} width={70} /></td>
                                <td>{item.titulo}</td>
                                <td>${item.cantidad * item.precio}</td>
                            </tr>
                        ))
                    }

                    <tr>
                        <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                        <td className="align-middle text-center">${sumTotal()}</td>
                        <td className="align-middle text-center"><Link to={"/checkout"} className="btn btn-primary">Finalizar SU Compra</Link></td>
                    </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;