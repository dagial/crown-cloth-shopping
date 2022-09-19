import {useContext,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../product-cards/product-cards'

import {CategoryContainer,CategoryTitle} from './category.style.jsx'

const Category=()=>{

    const {categoriesMap}=useContext(CategoriesContext)
    const {category}=useParams()
    const [products,setProducts]=useState(categoriesMap[category])
    
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },

    [category,categoriesMap]
    
    )
    return (
        <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
           
        {
            
          products &&  products.map((product)=><ProductCard key={product.id} product={product}/>)
        }
        </CategoryContainer>
        </>
    )

}
export default Category;