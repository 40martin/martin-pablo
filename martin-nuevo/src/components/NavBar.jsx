import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="fw-bold" aria-current="page" to={"/destacado"}>Destacado</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="fw-bold" to={"/category/hombre"}>Hombre</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="fw-bold" to={"/category/mujer"}>Mujer</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="fw-bold" to={"/category/ninos"}>Niños</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;