import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {CartIconContainer,ShoppingIcons,ItemCount} from "./cart-icon.style.jsx"
import { ShopToggleContext } from "../../context/shopToggle.context";
import {useContext} from "react"
const CartIcon=()=>{
    const {toggleShop,setToggleShop,cartCount}=useContext(ShopToggleContext)
    const ToggleHandler=()=>{
        setToggleShop(!toggleShop)

    }
    return(
        <CartIconContainer onClick={ToggleHandler}>
            <ShoppingIcons />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;