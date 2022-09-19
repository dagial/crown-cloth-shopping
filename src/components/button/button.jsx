import {BaseButton,GoogleSigninButton,InvertedButton} from "./button.style.jsx"

export const BUTTON_TYPES={
    base:"",
    google:"google-sign-in",
    inverted:"inverted"
}

const getButton=(buttonType=BUTTON_TYPES.base)=>(
    {

        [BUTTON_TYPES.base]:BaseButton,
        [BUTTON_TYPES.google]:GoogleSigninButton,
        [BUTTON_TYPES.inverted]:InvertedButton
        

    }[buttonType]
)
const Button=({children,buttonType,...otherAttrs})=>{
    const CustomButton=getButton(buttonType)
    return(
        <CustomButton {...otherAttrs}>{children}</CustomButton>
    )

}
export default Button;