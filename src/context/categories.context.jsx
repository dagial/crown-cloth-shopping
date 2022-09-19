import {createContext,useState,useEffect} from 'react'
import { getCategoriesAndDocuments} from '../utils/firebase'



export const CategoriesContext=createContext({
    categoriesMap:{},
    setCategoriesMap:()=>null,
})


export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({})
    useEffect(()=>{
        const getCatagoryMap=async ()=>{
         const categoryMap= await getCategoriesAndDocuments();
         setCategoriesMap(categoryMap)
         console.log(categoryMap)
        }
        getCatagoryMap();

    },[])

    const value={categoriesMap,setCategoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}