import './Form.css';
import InputField from '../input_field';
import Dropdown from '../dropdown';
import SubmitButton from '../submit_button';

export const Form = () => {
    const times = ['DevOps', 'Front-end', 'Back-end', 'Data Science', 'UX e Design', 'Inovação'];

    const onSave = (event) => {
        event.preventDefault();
        console.log('Submissão realizada com sucesso');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados do novo integrante</h2>
                <InputField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <InputField mandatory={true} label="Cargo" placeholder="Informe seu cargo" />
                <InputField mandatory={false} label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown mandatory={true} label="Time" itens={times}/>
                <SubmitButton>Criar Card</SubmitButton>
            </form>
        </section>
    );
}