import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
//el hook que me permite utilixar un contexto
import { useContext } from "react";
//tengo que importar el contexto que quiero utilizar
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = ()=>{
    console.log('CartWidget')
    const {cart}= useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <BsCart4  fontSize={'1.5rem'}/>
             <Badge bg="danger">5</Badge>
        </div>
    )
}

export default CartWidgetIcons