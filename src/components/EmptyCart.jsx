import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2 className='text-center'>Tu carrito esta vacio! 😱</h2>
        <h3  className='text-center'> Te invitamos a ver nuestros productos</h3>
        <Link className='btn btn-dark' to='/'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart