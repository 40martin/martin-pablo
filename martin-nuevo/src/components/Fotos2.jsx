import cuartafoto from "./images/cuarta-foto.webp";
import quintafoto from "./images/quinta-foto.webp";


const Foto2 = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={cuartafoto} alt={"cuartafoto"} />
                    <h3>Entrenamiento Hombre</h3>
                    <p><a href="/" className="btn btn-dark">Comprar</a></p>
                </div>

                <div className="col text-center">
                <img src={quintafoto} alt={"quintafoto"} />
                    <h3>Entrenamiento Mujer</h3>
                    <p><a href="/" className="btn btn-dark">Comprar</a></p>
                </div>
            </div>
        </div>
    )
}

export default Foto2;