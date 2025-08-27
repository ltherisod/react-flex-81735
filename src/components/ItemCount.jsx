import {useState} from 'react'

const ItemCount = ()=>{
    const[count, setCount]=useState(1)
    const sumar = ()=>{
    setCount(count +1)
}
const restar = ()=>{
    setCount(count -1)
}
    console.log('ItemCount')
    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
             <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount