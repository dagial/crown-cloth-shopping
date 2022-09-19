import {useContext,Fragment} from 'react';
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-cards/product-cards";
import CategoryPreview from '../../components/category-preview/category-preview';

import "./categories-preview.style.scss"

const CategoriesPreview=()=>{
    const {categoriesMap}=useContext(CategoriesContext)
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