import './SubmitButton.css'

export const SubmitButton = (props) => {
    return(
        <button className='submit-button'>
            {props.children}
        </button>
    );
}
