//herramienta para utilizar un contexto
import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
//importar el contexto que quiero utilizar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({detalle}) => {

const {addItem}= useContext(CartContext)
 //actividad sincronizar count guia proyecto final
  //sigo tal cual la consigna
  // const [quantityAdded, setQuantityAdded]= useState(0)
    // const onAdd = (cantidad) => {
    //     console.log(`compraste ${cantidad} unidades de ${detalle.name}`)
    //     setQuantityAdded(cantidad)
    //     addItem(detalle, cantidad)
    //     console.log(cantidad, 'por eventos')
    //     console.log(quantityAdded, 'estado')
    // }
    const [purchase, setPurchase]= useState(false)
     const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades de ${detalle.name}`)
        setPurchase(true)
        addItem(detalle, cantidad)
    }

  return (
    <div className='d-flex flex-column align-items-center'>
        <h2>Detalle de: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}, 00</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
        {/* sigo tal cual la consigna */}
       {/* {quantityAdded!== 0 ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> :<ItemCount stock={detalle.stock} onAdd={onAdd}/>} */}
       {
       purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> 
       :<ItemCount stock={detalle.stock} onAdd={onAdd}/> 
       }
    </div>
  )
}

export default ItemDetail