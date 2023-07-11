import preciosjustos from "./images/precios-justos.webp";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import twitter from "./images/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-dark bg-body-secondary py-4">
            <div className="row">
                <div className="col">
                    <h5>Tienda Online</h5>
                </div>

                <div className="col">
                    <h5>Sobre la Compra</h5>
                </div>

                <div className="col">
                    <h5>Acerca de Topper</h5>
                </div>

                <div className="col">
                    <img src={preciosjustos} alt={"preciosjustos"} width={100} />
                </div>

                <div className="col">
                    <Link to={"https://www.facebook.com/Topper.Oficial/"}><img src={facebook} alt={"facebook"} width={25} /></Link>
                </div>

                
                <div className="col">
                    <Link to={"https://www.instagram.com/topper_argentina/"}><img src={instagram} alt={"instagram"} width={25} /></Link>
                </div>

                <div className="col">
                    <Link to={"https://www.youtube.com/channel/UCWcXQwyyj_Ey4sZ6Fb5Ra5w"}><img src={youtube} alt={"youtube"} width={25} /></Link>
                </div>

                <div className="col">
                    <Link to={"https://twitter.com/topperargentina/"}><img src={twitter} alt={"twitter"} width={25} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;