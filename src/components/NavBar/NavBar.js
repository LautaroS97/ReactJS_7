import logo from './img/logo.png';

const MenuReactJS = () => {
    return (
        <div>
            <section>
            <div className="logo-container">
                <a><img className="logo" src={logo}></img></a>
            </div>
            <div className="menu-container">
                <a><h2 className="categories">TIENDA</h2></a>
                <a><h2 className="categories">CARRITO</h2></a>
                <a><h2 className="categories">PAGAR</h2></a>
                <a><h2 className="categories">PEDIDO</h2></a>
            </div>
            </section>
        </div>
        
    )
}

export default MenuReactJS;