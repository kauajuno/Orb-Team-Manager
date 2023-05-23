import './Form.css';
import InputField from '../input_field';

export const Form = () => {
    return (
        <section>
            <form>
                <h2>Preencha os dados do novo integrante</h2>
                <InputField label="Nome" placeholder="Digite seu nome" />
                <InputField label="Cargo" placeholder="Informe seu cargo" />
                <InputField label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    );
}