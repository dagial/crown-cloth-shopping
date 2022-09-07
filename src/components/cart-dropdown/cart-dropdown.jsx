 import Button from "../button/button"
 import "./cart-dropdown.style.scss"
 import {useContext} from 'react'
 import {Link} from 'react-router-dom'
 import { ShopToggleContext } from "../../context/shopToggle.context"
 import CartItem from "../cart-item/cart-item"
 const CartDropdown=()=>{
    const {cartItems}=useContext(ShopToggleContext)
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {cartItems.map(element=>{
                
                return (
                    <CartItem key={element.id} element={element}/>
                )

            })}
            </div>
            <Link to='/checkout'>
                <Button>Go to checkout</Button>
                
                </Link>

        </div>
    )


 }
 export default CartDropdown