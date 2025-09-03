import {useState, useEffect} from 'react'

const ItemCount = ()=>{
    const[count, setCount]=useState(1)
    const [compra, setCompra] = useState(false)
    const sumar = ()=>{
    setCount(count +1)
}
const restar = ()=>{
    setCount(count -1)
}
const comprar = () => {
    setCompra(!compra)
}
    console.log('ItemCount')


    //ejemplos de useEffevct
    //no se usa nunca
    useEffect(()=>{
        console.log('me ejecuto siempre')
    })

    //se ejecute una sola vez
    useEffect(()=>{
        console.log('me ejecuto una sola vez')
    },[])

    //se va a ejecutar cuando monta el componente y va a estar a la escucha de compra
    useEffect(()=>{
        console.log('Me ejecunto cuando carga y siempre que compra cambie', compra)
    },[compra])
    
    return(
        <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
             <button className='btn btn-success' onClick={sumar}>+</button>
             <button className='btn btn-primary' onClick={comprar}>Comprar</button>
        </div>
    )
}

export default ItemCount