import {createContext,useState} from 'react'

import Shop_Data from "../shop-data.json"


export const ProductContext=createContext({
    products:[],
    setProducts:()=>null,
})


export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState(Shop_Data)
    const value={products,setProducts}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}