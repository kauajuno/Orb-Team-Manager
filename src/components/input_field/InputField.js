import './InputField.css'

export const InputField = (props) => {
    return(
        <div className="input-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}