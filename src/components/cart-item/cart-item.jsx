import {CartItemContainer,ItemDetails,Name} from "./cart-item.style.jsx"
const CartItem=({element})=>{
    const {name,imageUrl,price,quantity}=element
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
                
                 </CartItemContainer>
    )
}
export default CartItem