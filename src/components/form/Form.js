import './Form.css';
import InputField from '../input_field';
import Dropdown from '../dropdown';
import SubmitButton from '../submit_button';
import { useState } from 'react';

export const Form = (props) => {
    
    const teamNames = props.teamNames;

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onRegister({
            name,
            position,
            image,
            team
        });
        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill with new member's data</h2>
                <InputField
                    val={name}
                    setVal={name => setName(name)}
                    mandatory={true}
                    label="Name"
                    placeholder="Insert your name"
                />
                <InputField
                    val={position}
                    setVal={position => setPosition(position)}
                    mandatory={true}
                    label="Graduation"
                    placeholder="What degree do you hold?"
                />
                <InputField
                    val={image}
                    setVal={image => setImage(image)}
                    mandatory={false}
                    label="Image URL"
                    placeholder="Insert the image URL"
                />
                <Dropdown val={team} setVal={team => setTeam(team)} mandatory={true} label="Team" itens={teamNames} />
                <SubmitButton>Criar Card</SubmitButton>
            </form>
        </section>
    );
}