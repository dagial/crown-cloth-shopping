import {useContext} from 'react'
import { ShopToggleContext } from '../../context/shopToggle.context'
import "./checkout.style.scss"
const CheckOutListItem=({item})=>{
   const {name,quantity,price,imageUrl}=item
   const {removeItemFromCart,dropItemFromCart,addItemToCart}=useContext(ShopToggleContext)
    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={()=>dropItemFromCart(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItemToCart(item)}>&#10095;</div>
                </span>
                
                <span className='price' >{price}</span>
            <div className='remove-button' onClick={()=>removeItemFromCart(item)}>&#10005;</div>
        </div>
    )

}
export default CheckOutListItem;