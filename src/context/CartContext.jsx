import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext()


//Definimos y creamos el custom Provider (proveedor)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //las funciones qu van a modificar cart (setCart)
    //agregar un item al carrito y contemplaar repetidos
    const addItem = (item, qty)=>{
        if(isInCart(item.id)){
            console.log('ya existe en el carrito')
            //sumar cantidades y actualizar ese item
            // const carritoActualizado =  cart.map((prod)=>{
            //     if(item.id === prod.id){
            //         //actualizar y sumar cantidades
            //         return {...prod, quantity: prod.quantity + qty}
            //     }else{
            //         //a todos los demás que no cumplan con la condicion los devuelvo tal cual
            //         return prod
            //     }
            // })
            // //actualizo el estado con el nuevo array
            // setCart(carritoActualizado)
            //version corta
            setCart(
                cart.map((prod)=>{
                if(item.id === prod.id){
                    //actualizar y sumar cantidades
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //a todos los demás que no cumplan con la condicion los devuelvo tal cual
                    return prod
                }
            })
            )
        }else{

            setCart([...cart, {...item, quantity:qty}])
        }
    }

    //boorar todo el cart en la cartView y checkout
    const clear = ()=>{
        setCart([])
    }

    //eliminaar un item en cartView
    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //devolver un boolean si existe o no en el carrito
    const isInCart=(id)=>{
        return cart.some((prod)=> prod.id === id)
    }



    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}