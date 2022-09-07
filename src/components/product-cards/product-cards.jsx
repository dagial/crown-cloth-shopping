import Button from "../button/button"
import "./product-cards.style.scss"
import { useContext } from "react"
import { ShopToggleContext } from "../../context/shopToggle.context"

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
    const {addItemToCart}=useContext(ShopToggleContext)

    return(
    <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`}/>
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button buttonType="inverted" onClick={event=>addItemToCart(product)}>Add to cart</Button>
</div>)

} 
export default ProductCard