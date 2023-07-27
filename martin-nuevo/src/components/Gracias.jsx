import { Link, useParams } from "react-router-dom";

const Gracias = () => {
    const { orderId } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <div className="alert alert-light" role="alert">
                    <h1 className="fs-1 text">Gracias por su compra</h1>
                    <p>Su orden de compra es: <b>{orderId}</b></p>
                    <p><Link to={"/"} className="btn btn-light mt-3">Volver a la página principal</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gracias;