import {Routes,Route} from 'react-router-dom'
import "./shop.style.scss"
import CategoriesPreview from "../categories-preview/categories-preview"
import Category from '../../components/category/category'

const Shop=()=>{
   
  return (
    <Routes>
        <Route index={true} element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category />}/>
    </Routes>
  )

}
export default Shop;