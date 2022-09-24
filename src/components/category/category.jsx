import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductCard from '../product-cards/product-cards'
import { useSelector } from 'react-redux'
import { categoriesSelector } from '../../store/categories/categories.selector'

import {CategoryContainer,CategoryTitle} from './category.style.jsx'

const Category=()=>{
    console.log("render/re-rendering categories")
    const categoriesMap=useSelector(categoriesSelector)
    const {category}=useParams()
    const [products,setProducts]=useState(categoriesMap[category])
    
    useEffect(()=>{
        console.log("effect fired calling set Products")
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