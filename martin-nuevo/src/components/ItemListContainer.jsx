import { useEffect, useState } from "react";
// import productos from "./json/productos.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
                
            },);
        });

        promesa.then(data => {
            setItems(data);
        });
    }, [id]); */

   useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "martin");
        getDocs(itemsCollection).then(resultado => {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

  /*   useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "martin");
        
        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
    }, []); */
    
    return (
        <div className="container my-3">
            <div className="row">
                <ItemList productos={items} />
               {/*  <div className="col-md-4">
                    <img src={items.imagen} alt={items.nombre} className="img-fluid" />
                </div>

                <div className="col-md-4">
                    <h2>{items.nombre}</h2>
                    <p>${items.precio}</p>
                </div> */}
                
                <ItemCount stock={6} />
            </div>
        </div>
    )
}

export default ItemListContainer;