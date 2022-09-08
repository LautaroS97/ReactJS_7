import { Link } from "react-router-dom";
import Contador from "../Counter/Counter";

const Item = ({producto}) => {

    return (
        <div className="container-card">
            <div className="card-list">
                <div className="card">
                    <img className="imagen-producto" src={producto.img}/>
                    <h3 className="nombre-producto">{producto.nombre}</h3>
                    <p className="info-producto">Precio: AR$ {producto.precio}</p>
                    <h4 className="info-producto">Existencias: {producto.stock}</h4>
                    <p className="info-producto">Descripción: {producto.desc}</p>
                    <Link to={`/item/${producto.id}`} className="link-vermas">Ver detalles...</Link>
                </div>
                <Contador></Contador>
            </div>
        </div>
    )
}

export default Item;