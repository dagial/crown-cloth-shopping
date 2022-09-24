import Button from "../button/button"
import "./product-cards.style.scss"
import { useDispatch, useSelector } from "react-redux"
import { useContext } from "react"
import { setCartItems } from "../../store/cart/cart-action"


const ProductCard=({product})=>{
    const {name,price,imageUrl}=product

    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.cartItems)
    
    return(
    <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`}/>
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button buttonType="inverted" onClick={event=>dispatch(setCartItems(cartItems,product))}>Add to cart</Button>
</div>)

} 
export default ProductCard