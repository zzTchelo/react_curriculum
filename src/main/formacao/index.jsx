import './formacao.css'
import formacoes from '../../dados/formacoes'

const Formacao = () => {
    return (
        formacoes.map(formacao =>
            <div className="formacao">
                <span className="curso">
                    {formacao.curso}
                </span>
                <span className='ano'>
                    {formacao.ano}
                </span>
                <span className='faculdade'>
                    {formacao.faculdade}
                </span>
                <span className='cidade'>
                    {formacao.cidade}
                </span>
            </div>
        )
    )

}

export default Formacao