import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"


const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    // const {mensaje} = props
    
    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.error(error))
    },[])

    console.log(data)

    return(
        <div>
            <h1>{mensaje}</h1>
            {/* {data.map((prod)=> <div key={prod.id}><p>{prod.name}</p></div>)} */}
            <ItemList data={data} />
        </div>
    )
}
export default ItemListContainer