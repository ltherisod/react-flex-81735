import { useState, useEffect } from "react"
import { getProducts, productos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = ({mensaje})=>{
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {type}=useParams()
    console.log('categoria: ', type)


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

    //PROMESA
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             //type es undefined y no filtro
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setLoading(false))
    //     //tiene que estar a la escucha del cambio de categoria
    // },[type])

    // SE HACE UNA SOLA VEZ Y DESPUES SE BORRA!!! 
    // const subirData = ()=>{
    //     console.log('SUBIENDO DATA...')
    //     const coleccionAAgregar= collection(db, "productos")
    //         productos.map((prod)=> addDoc(coleccionAAgregar, prod))
    // }
  

    return(
       <>
       {/* DESPUES SE BORRA!!!! */}
       {/* <button onClick={subirData}>SUBIR DATA!</button> */}
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