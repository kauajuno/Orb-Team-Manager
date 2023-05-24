import './InputField.css'

export const InputField = (props) => {
    return(
        <div className="input-field">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}