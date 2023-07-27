import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "martin");
        getDocs(itemsCollection).then(resultado => {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <div className="container my-3">
            <div className="row">
                {<ItemList productos={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;