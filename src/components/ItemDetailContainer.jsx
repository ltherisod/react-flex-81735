import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]=useState(false)
    const {id}= useParams()
   
    useEffect(()=>{
      setCargando(true)
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])

    
  return (
    <>
       {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    </>
  )
}

export default ItemDetailContainer