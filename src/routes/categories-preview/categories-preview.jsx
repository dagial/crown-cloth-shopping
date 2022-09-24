import {Fragment} from 'react';
import ProductCard from "../../components/product-cards/product-cards";
import CategoryPreview from '../../components/category-preview/category-preview';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../store/categories/categories.selector';

import "./categories-preview.style.scss"

const CategoriesPreview=()=>{
    const categoriesMap=useSelector(categoriesSelector)
    return(
        <div className='category-preview-container'>
        <Fragment>

        {
        Object.keys(categoriesMap).map(title=>{
            const product=categoriesMap[title]
            return <CategoryPreview key={title} title={title} products={product}/>
                    

})
    }
            
                
            
        
        </Fragment>
        </div>
    )

}
export default CategoriesPreview;