import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <>
            <div className="card">
                <Link to={"/item/" + producto.idx}>
                    <img src={producto.imagen} className="card-img-top" alt={"producto.titulo"} />
                    <div className="card-body">
                        <h3>{producto.titulo}</h3>
                        <p className="card-text"><span className="text-secondary">{producto.descripcion}</span><br /><b>$
                        {producto.precio}</b></p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Item;