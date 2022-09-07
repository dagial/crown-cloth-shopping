import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss"
import { ShopToggleContext } from "../../context/shopToggle.context";
import {useContext} from "react"
const CartIcon=()=>{
    const {toggleShop,setToggleShop,cartCount}=useContext(ShopToggleContext)
    const ToggleHandler=()=>{
        setToggleShop(!toggleShop)

    }
    return(
        <div className="cart-icon-container" onClick={ToggleHandler}>
            <ShoppingIcon className="shoping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;