import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {CartIconContainer,ShoppingIcons,ItemCount} from "./cart-icon.style.jsx"

import {useEffect} from "react"
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
import { setToggleShop,setCartCount } from "../../store/cart/cart-action";

const CartIcon=()=>{

    const dispatch=useDispatch()
    const {cartItems,cartCount}=useSelector((state)=>state.cart)
    const ToggleShop=()=>{
       
        dispatch(setToggleShop())
    }

    useEffect(()=>{

        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        dispatch(setCartCount(newCartCount))

    },[cartItems,dispatch])
    
    return(
        <CartIconContainer onClick={ToggleShop}>
            <ShoppingIcons />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;