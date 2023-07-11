import carrocompra from "./images/carro-compra.png";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={carrocompra} alt={"carrocompra"} width={40} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;