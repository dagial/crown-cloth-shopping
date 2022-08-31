import {Outlet,Link} from 'react-router-dom'
import {Fragment} from 'react'
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import "./navigation.style.scss"
const Navigation=()=>{

    return(
        <Fragment>
            <div className="navigation">
        <Link className="nav-logo" to="/">
        <div>
            <CrwnLogo className="logo"/>
        </div>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shops">

        <div>shops</div>

        </Link>
        <Link className="nav-link" to="/contacts">
            <div>Contact</div>
        </Link>
        <Link className="nav-link" to="/sign-in">
            <div>SIGN IN</div>
        </Link>
        </div>
        </div>
        <Outlet/>

        </Fragment>
    )
}
export default Navigation;