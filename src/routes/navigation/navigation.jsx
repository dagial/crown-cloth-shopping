import {Outlet,Link} from 'react-router-dom'
import {Fragment,useContext} from 'react'
import {UserContext} from "../../context/user.context"
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/cart-icon/cart-icon'
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import "./navigation.style.scss"
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { ShopToggleContext } from '../../context/shopToggle.context'

const Navigation=()=>{
    const {currentUser}=useContext(UserContext)
    const {toggleShop}=useContext(ShopToggleContext)
    const handleSignOut=async ()=>{
        await signOutUser()

    }
    
    return(
        <Fragment>
            <div className="navigation">
        <Link className="nav-logo" to="/">
        <div>
            <CrwnLogo className="logo"/>
        </div>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">

        <div>shops</div>

        </Link>
        <Link className="nav-link" to="/contacts">
            <div>Contact</div>
        </Link>
        {
            currentUser && <span className="nav-link" onClick={handleSignOut}>
            <div>Sign Out</div>
        </span>
        }
        {!currentUser && <Link className="nav-link" to="/auth"><div>Sign In</div></Link>}
        <CartIcon />
        {toggleShop && <CartDropdown/>}
        </div>
        </div>
        <Outlet/>
        

        </Fragment>
    )
}
export default Navigation;