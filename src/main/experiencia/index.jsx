import './experiencia.css'
import experiencias from '../../dados/experiencias';

const Experiencia = () => {
    return (
        experiencias.map(experiencia =>
            <div className='experiencia'>
                <span className='cargo'>
                    {experiencia.cargo}
                </span>
                <span className='cidade'>
                    {experiencia.cidade}
                </span>
                <span className='empresa'>
                    {experiencia.empresa}
                </span>
                <span className='ano'>
                    {experiencia.ano}
                </span>
                <ul className='tecnologias'>
                    <span className="sub-title">Habilidades:</span>
                    {
                        experiencia.habilidades.map(tecnologia => {
                            return <li className='tecnologia'>{tecnologia}</li>
                        })
                    }
                </ul>
            </div>
        )
    )
}

export default Experiencia