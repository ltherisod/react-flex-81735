import "../css/NavBar.css"
import CartWidget from "./CartWidget"
import CartWidgetIcons from "./CartWidgetIcons"
//si tengo la imagen dentro de src la tengo que importar
//import logoAssets from "../assets/react.svg"

const NavBar= ()=>{
    console.log('Navbar')
    return(
        <nav className="nav-container">
            <a className='anchor-nav' href="">
                <img className="logo" alt='logo' src='../logo-shop.png'/>
                {/* <img className="logo" alt='logo' src={logoAssets}/> */}
            </a>
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Más vendidos</a>
            {/* <CartWidget/> */}
            <CartWidgetIcons/>
        </nav>
    )
}

export default NavBar