import { useState } from 'react';
import './InputField.css'

export const InputField = (props) => {

    let [val, setVal] = useState('');

    const onTyping = (e) => {
        setVal(e.target.value);
        console.log(val)
    }

    return(
        <div className="input-field">
            <label>{props.label}</label>
            <input value={val} onChange={onTyping} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}