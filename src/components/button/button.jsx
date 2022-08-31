import "./button.style.scss"
const BUTTON_TYPES={
    google:"google-sign-in",
    inverted:"inverted"
}

const Button=({children,buttonType,...otherAttrs})=>{

    return(
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`}
        {...otherAttrs}
        >{children}</button>
    )

}
export default Button;