import {useContext} from 'react'

import { useDispatch , useSelector} from 'react-redux'
import { setCartItems,setDropCartItem,setRemoveCartItem } from '../../store/cart/cart-action'
import { cartItemsSelector } from '../../store/cart/cart-selectors'
import "./checkout.style.scss"



const CheckOutListItem=({item})=>{
   const {name,quantity,price,imageUrl}=item
   const dispatch=useDispatch()
   const cartItems=useSelector(cartItemsSelector)
   console.log(cartItems)

    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={()=>dispatch(setDropCartItem(cartItems,item))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>dispatch(setCartItems(cartItems,item))}>&#10095;</div>
                </span>
                
                <span className='price' >{price}</span>
            <div className='remove-button' onClick={()=>dispatch(setRemoveCartItem(cartItems,item))}>&#10005;</div>
        </div>
    )

}
export default CheckOutListItem;