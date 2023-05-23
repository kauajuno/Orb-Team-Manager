import './Form.css';
import InputField from '../input_field';
import Dropdown from '../dropdown';

export const Form = () => {
    const times = ['DevOps', 'Front-end', 'Back-end', 'Data Science', 'UX e Design', 'Inovação'];
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados do novo integrante</h2>
                <InputField label="Nome" placeholder="Digite seu nome" />
                <InputField label="Cargo" placeholder="Informe seu cargo" />
                <InputField label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown label="Time" itens={times}/>
            </form>
        </section>
    );
}