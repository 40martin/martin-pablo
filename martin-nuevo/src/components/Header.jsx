import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import topperarriba from "./images/topper-arriba.png";
import topperlogo from "./images/topper-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary-subtle">
                <div className="col-md-6">
                    <Link to={"https://topperio.vtexassets.com/assets/vtex.file-manager-graphql/images/1557d0d7-6ad6-4241-8fad-16e5b588c801___c8c70910076743866b544b9a3d028fd9.png"}><img src={topperarriba} 
                    alt={"topperarriba"} width={60} /></Link>
                </div>

                <div className="col-md-6 text-end">
                    <Link to="/" className="bg-black text-white text-decoration-none">Locales</Link> | <Link href="/" 
                    className="bg-black text-white text-decoration-none">Ayuda</Link>
                    
                </div>
            </div>

            <div className="row bg-primary-subtle">
                <div className="col">
                    <img src={topperlogo} alt={"topperlogo"} width={150} />
                </div>

                <div className="col-text-center">
                    <NavBar />
                </div>

                <div className="col-md-4 text-end">
                   <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;