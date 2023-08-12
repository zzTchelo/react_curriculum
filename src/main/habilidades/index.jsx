import habilidades from '../../dados/habilidades';
import './habilidades.css'

const Habilidades = () => {
    return (
        <div className='abilit-content'>
            {habilidades.map( habilidade =>
                <div className="stack">
                    <span className="topic-title">{habilidade.area}</span>
                    <ul className="abilities">
                        {
                            habilidade.habilidade.map(descricao =>
                                <li className="ability">
                                        <img src={descricao.icon} alt={descricao.descricao} />
                                        <span className="desc">{descricao.descricao}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
                )
            }
        </div>
    )
}

export default Habilidades;