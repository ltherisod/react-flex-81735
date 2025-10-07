import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import {  collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {type}=useParams()
//FIREBASE

    useEffect(()=>{
        setLoading(true)
        //conectarnos con nuestra collection
        const prodCollection = type 
        ? query(collection(db, "productos"), where("category", "==", type))
        : collection(db, "productos")
        //pedir los datos (documentos)
        getDocs(prodCollection)
        .then((res)=>{
                // console.log(res.docs, 'res')
                const list = res.docs.map((doc)=>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                // console.log(list)

                setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[type])

  
  

    return(
       <>
      
       {
        loading 
        ? <LoaderComponent/>
        :  <>
            <h1 className="text-center">{mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data} />
        </>
       }
       </>
    )
}
export default ItemListContainer