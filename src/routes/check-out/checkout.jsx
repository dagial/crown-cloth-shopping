import CheckOutListItem from "../../components/checkout-list/checkout-list-item" 
import {useContext} from 'react'
import {useDispatch} from 'react-redux'

import "./checkout.style.scss"
import { useSelector } from "react-redux";
import { cartItemsSelector,cartTotalSelector } from "../../store/cart/cart-selectors";


const CheckOut=()=>{

    const cartItems=useSelector(cartItemsSelector)
    const totalPrice=useSelector(cartTotalSelector)
    return(
            <div className="checkout-container">
                        <div className="checkout-header">
                            <div className="header-block"><span>Product</span></div>
                            <div className="header-block"><span>Description</span></div>
                            <div className="header-block"><span>Quantity</span></div>
                            <div className="header-block"><span>Price</span></div>
                            <div className="header-block"><span>Remove</span></div>
                        </div>
                
            {cartItems.map(item=>{
                return(
                    <CheckOutListItem key={item.id} item={item}/>
                )
            })}
            <span className="total">Total: ${totalPrice}</span>
        </div>
    )


}
export default CheckOut