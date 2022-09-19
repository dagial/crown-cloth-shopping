import {Outlet,Link} from 'react-router-dom'
import {Fragment,useContext} from 'react'
import {UserContext} from "../../context/user.context"
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/cart-icon/cart-icon'
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { ShopToggleContext } from '../../context/shopToggle.context'

import {NavigationContainer,LogoContainer,NavLinkContainer,NavLink} from "./navigation.style.jsx"


const Navigation=()=>{
    const {currentUser}=useContext(UserContext)
    const {toggleShop}=useContext(ShopToggleContext)
    const handleSignOut=async ()=>{
        await signOutUser()

    }
    
    return(
        <Fragment>
            <NavigationContainer>
        <LogoContainer to="/">
        <div>
            <CrwnLogo className="logo"/>
        </div>
        </LogoContainer>
        <NavLinkContainer className="nav-links-container">
        <NavLink to="/shop">

        <div>shops</div>

        </NavLink>
        <NavLink to="/contacts">
            <div>Contact</div>
        </NavLink>
        {
            currentUser && <NavLink as='span' onClick={handleSignOut}>
            <div>Sign Out</div>
        </NavLink>
        }
        {!currentUser && <NavLink to="/auth"><div>Sign In</div></NavLink>}
        <CartIcon />
        {toggleShop && <CartDropdown/>}
        </NavLinkContainer>
        </NavigationContainer>
        <Outlet/>
        

        </Fragment>
    )
}
export default Navigation;