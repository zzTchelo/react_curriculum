import './experiencia.css'

const Experiencia = (props) => {
    return (
        <div className=''>
        <span className=''>
            {props.empresa}
        </span>
        <span className=''>
            {props.ano}
        </span>
        <span className=''>
            {props.cargo}
        </span>
        <span className=''>
            {props.cidade}
        </span>
        <ul className=''>
            Tecnologias:
            {
                props.tecnologias.map(tecnologia => {
                    return <li className=''>{tecnologia}</li>
                })
            }
        </ul>
    </div>
    )
}

export default Experiencia