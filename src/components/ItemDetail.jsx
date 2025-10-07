//herramienta para utilizar un contexto
import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
//importar el contexto que quiero utilizar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const ItemDetail = ({detalle}) => {

const {addItem}= useContext(CartContext)
 
    const [purchase, setPurchase]= useState(false)

     const onAdd = (cantidad) => {
        // console.log(`compraste ${cantidad} unidades de ${detalle.name}`)
        setPurchase(true)
        addItem(detalle, cantidad)
        Swal.fire({
          position:'top-end',
          icon:'success',
          title:`Agregaste ${detalle.name} al carrito`,
          showCancelButton:false,
          showConfirmButton:false,
          timer:2000
        })
    }

  return (
    <div className='d-flex flex-column align-items-center'>
        <h2>Detalle de: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}, 00</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
      { purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> 
       :<ItemCount stock={detalle.stock} onAdd={onAdd}/> 
       }
    </div>
  )
}

export default ItemDetail