import projetos from '../../dados/projetos';
import './projetos.css'

const Projetos = () => {
    return (
        <div className='projeto-bloco'>
            {
                projetos.map(projeto =>
                    <div className="projeto">
                        <div className="descricao">
                            <div className="head-projeto">
                                <p>Título:<span className='titulo-projeto'>{projeto.nome}</span></p>
                                <p>Ano:<span className='ano-projeto'>{projeto.ano}</span></p>
                            </div>
                            <ul className='tecnologias-projeto'>
                                Tecnologias:
                                {
                                    projeto.tecnologias.map(tecnologia =>
                                        <li className='tecnologia-projeto'>{tecnologia}</li>
                                    )
                                }
                            </ul>
                            <p className='descricao-projeto'><label htmlFor="">Descrição:</label><span>{projeto.descricao}</span></p>
                            <p className='link-projeto'>Disponível em:<a href={projeto.link}>{projeto.link}</a></p>
                        </div>
                        <div className="imagem">
                            <img src={projeto.imagem} alt={projeto.nome} />
                        </div>
                    </div>    
                )
            }
        </div>
    )
}

export default Projetos;
