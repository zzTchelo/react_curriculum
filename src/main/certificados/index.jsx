import certificados from '../../dados/certificados';
import './certificados.css'

const Certificados = () => {
    return (
        <div className="main-cert">
            {certificados.map(certificado => 
                <div className="certificados">
                    <span className='certificado'>{certificado.emissor}</span>
                    <span className="titulo">{certificado.titulo}</span>
                    <span className="ano_certificado">{certificado.ano}</span>
                </div>
            )}
        </div>
    )}
                        
                   
export default Certificados;
