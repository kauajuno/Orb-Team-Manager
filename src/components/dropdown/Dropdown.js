import './Dropdown.css';

export const Dropdown = (props) => {

    return(
        <div className='dropdown'>
            <label>
                {props.label}
            </label>
            <select onChange={e => props.setVal(e.target.value)} required={props.mandatory} value={props.val}>
                <option value=""></option>
                {
                    props.itens.map(item =>{
                        return <option key={item}>{item}</option>
                    })
                }
            </select> 
        </div>
    )
}