import {CategoriesContainer,BackgroundImage,
  CategoryBodyContainer,CategoryContainer} from"./categories.styles.jsx"

const CategoryItem=({category})=>{
    const {imageUrl,title}=category
    return(
        <CategoryContainer>
        <BackgroundImage style={{backgroundImage:`url(${imageUrl})`}}
         />
         <CategoryBodyContainer>
                    
          <h2>{title}</h2>
          <p>Shop Now</p>
          </CategoryBodyContainer>
  
          </CategoryContainer>  
        
        
        )
}
export default CategoryItem;