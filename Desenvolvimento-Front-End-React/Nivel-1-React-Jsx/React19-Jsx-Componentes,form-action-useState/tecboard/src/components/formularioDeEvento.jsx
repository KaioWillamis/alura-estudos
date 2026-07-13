import './App.css'

// props é um OBJETO
// props.children

function TituloFormulario (props) {
    return (
        <h2>
            {props.children}
        </h2>
    )
}

function CampoDeFormulario({ children }) {
    return (
        <fieldset>
            {children}
        </fieldset>
    )
}

function Label


function FormularioDeEvento(){
    return (
        <form className="form-evento">
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <fieldset>
                <label htmlFor="nome">
                    Qual o nome do evento?
                </label>
                <input type="text" id="nome" placeholder='Sumner dev hits'/>
            </fieldset>
        </form>
    )
}

export default FormularioDeEvento;