import './formacao.css'

const Formacao = (props) => {
    return (
        <div className="formacao">
            <span className="curso">
                {props.curso}
            </span>
            <span className='ano'>
                {props.ano}
            </span>
            <span className='faculdade'>
                {props.faculdade}
            </span>
            <span className='cidade'>
                {props.cidade}
            </span>
        </div>
    )

}

export default Formacao