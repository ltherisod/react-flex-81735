import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [checkMail, setCheckMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clear}= useContext(CartContext)
    const buyerData = (e)=>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    console.log(buyer, checkMail)
    const finalizarCompra = (e)=> {
        //para que la app no recargue
        e.preventDefault()
       if(!buyer.name || !buyer.lastname || !buyer.email || !buyer.address){
        //NO LO HAGAN CON ALERT DE NAVEGADOR
        alert('Complete los campos!')
       }else if(buyer.email !== checkMail){
        alert('Los correos no coinciden!')
       }else{
         let order ={
            comprador: buyer,
            compras: cart,
            total: total(), 
            fecha: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        //agregar doc
        addDoc(ventas, order)
        .then((res)=> {
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
       }
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
   <>
   {
    orderId 
    ?<div>
        <h2>Realizate tu compra correctamente! 🥳🙌</h2>
        <h3>El id de la compra: {orderId}</h3>
    </div>
    : <div>
        <h1>Complete el formulario con sus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input name='name' className='form-control' placeholder='Ingrese su nombre' type="text" onChange={buyerData}/>
            <input name='lastname' className='form-control' placeholder='Ingrese su apellido' type="text" onChange={buyerData}/>
            <input name='address' className='form-control' placeholder='Ingrese su direccion de envío' type="text" onChange={buyerData}/>
            <input name='email' className='form-control' placeholder='Ingrese su correo' type="email"onChange={buyerData} />
            <input name='second-email' className='form-control' placeholder='Repita su correo' type="email" onChange={(e)=> setCheckMail(e.target.value)}/>
            <button type='submit' className='btn btn-success'>Completar Compra</button>
        </form>
    </div>
   }
   </>
  )
}

export default Checkout