import { useState } from 'react';
import './InputField.css'

export const InputField = (props) => {

    const onTyping = (e) => {
        props.setVal(e.target.value);
    }

    return(
        <div className="input-field">
            <label>{props.label}</label>
            <input value={props.val} onChange={onTyping} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}