import { useEffect } from "react";
import { useState } from "react";
import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise((resolve) => {	
            setTimeout(() => {
                let producto = productos.find(item => item.idx === 3);
                setItem(producto);	
            },);
        });	

        promesa.then(data => {
            setItem(data);
        });
    }, []);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer;