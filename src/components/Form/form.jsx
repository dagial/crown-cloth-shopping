import './form.style.scss'

const FormInput=({label,...otherprops})=>{
    return (
        <div className="group">
            <input className="form-input" {...otherprops}></input>
            <label className={`${otherprops.value ? 'shrink' : ''} form-input-label`}>{label}</label>
    
        </div>
    )

}
export default FormInput;