 import Button from "../button/button"
 import {useContext} from 'react'
 import {Link} from 'react-router-dom'
 import { ShopToggleContext } from "../../context/shopToggle.context"
 import CartItem from "../cart-item/cart-item"

 import {CartDropdownContainer,CartItems} from "./cart-dropdown.style.jsx"
 const CartDropdown=()=>{
    const {cartItems}=useContext(ShopToggleContext)
    return(
        <CartDropdownContainer>
            <CartItems>
            {cartItems.map(element=>{
                
                return (
                    <CartItem key={element.id} element={element}/>
                )

            })}
            </CartItems>
            <Link to='/checkout'>
                <Button>Go to checkout</Button>
                
                </Link>

        </CartDropdownContainer>
    )


 }
 export default CartDropdown