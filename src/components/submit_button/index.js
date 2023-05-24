import './SubmitButton.css'

const SubmitButton = (props) => {
    return(
        <button className='submit-button'>
            {props.children}
        </button>
    );
}

export default SubmitButton;