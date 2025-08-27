import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";

const CartWidgetIcons = ()=>{
    return(
        <div>
            <BsCart4  fontSize={'1.5rem'}/>
             <Badge bg="danger">5</Badge>
        </div>
    )
}

export default CartWidgetIcons