import primerafoto from "./images/primera-foto.webp";
import segundafoto from "./images/segunda-foto.webp";



const Fotos = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src={primerafoto} alt={"primerafoto"} />
                    <h2 className="my-3">SOMOS TOPPER</h2>
                    <a href="/" className="btn btn-dark">Comprar</a>
                </div>

                <div className="col text-center">
                    <img src={segundafoto} alt={"segundafoto"} width={600} />
                    <h2 className="my-3">FORCE / BLAZER</h2>
                    <a href="/" className="btn btn-dark">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default Fotos;