import { useEffect, useState } from "react";
import agent from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponent";
import {Product} from "../../models/product"
import ProductList from "./ProductList";




export default function Catalog() {
      

  const [products, setProducts] = useState <Product[]>([]);
  const [loading, setLoading] = useState();


  useEffect(()=>{
   agent.Catalog.list().then(products=>setProducts(products))
  },[])

  if(loading) return <LoadingComponent/>
  
    return (

        <>
              <ProductList products={products}/>          
        </>
    )
}