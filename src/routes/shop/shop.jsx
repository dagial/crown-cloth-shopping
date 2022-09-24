import {Routes,Route} from 'react-router-dom'
import {useEffect} from 'react'
import "./shop.style.scss"
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import CategoriesPreview from "../categories-preview/categories-preview"
import Category from '../../components/category/category'
import { setCategories } from '../../store/categories/categories.actions'

const Shop=()=>{
  const dispatch=useDispatch()
  useEffect(()=>{
    const getCatagoryMap=async ()=>{
     const categoriesArray= await getCategoriesAndDocuments();
     dispatch(setCategories(categoriesArray))
    }
    getCatagoryMap();
  
  },[])
   
  return (
    <Routes>
        <Route index={true} element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category />}/>
    </Routes>
  )

}
export default Shop;