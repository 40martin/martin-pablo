import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [telefono, setTelefono] = useState("");
    const {cart, sumTotal} = useContext(CartContext);
    

    const generarOrden = () => {
        if (nombre.length === 0) {	
            return false;
        }

        if (email.length === 0) {	
            return false;
        }

        if (telefono.length === 0) {	
            return false;
        }

        const buyer = {nombre, email, telefono};
        const items = cart.map(item => ({id: item.id, title: item.titulo, price: item.precio, quantity: item.cantidad}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const Order = {buyer, items, date, total};

        const db = getFirestore();
        const OrdersCollection = db.collection("orders");
        addDoc(OrdersCollection, Order).then(resultado => {
            setOrderId(resultado.id)
        })
        .catch(resultado => {
            console.log("ERROR SU COMPRA NO PUDO SER PROCESADA");
        });
        
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-3">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} /> 
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />  
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} /> 
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/gracias/" + orderId} /> : ""}
                </div>
            </div> 
        </div>         
    )
}

export default Checkout;