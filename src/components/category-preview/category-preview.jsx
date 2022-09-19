
import ProductCard from '../product-cards/product-cards'
import {Link} from 'react-router-dom'
import {CategoryPreviewContainer,Title,Preview} from './category-preview.style.jsx'
const CategoryPreview=(({title,products})=>{

    return (
        <CategoryPreviewContainer>
            <Link to={`${title}`} >
            <h2><Title>{title.toUpperCase()}</Title></h2></Link>
            <Preview>
            {
                products.slice(0,4).map(product=>{
                    return <ProductCard key={product.id} product={product}/>


                })
            }
        </Preview>
        </CategoryPreviewContainer>
    )


})

export default CategoryPreview