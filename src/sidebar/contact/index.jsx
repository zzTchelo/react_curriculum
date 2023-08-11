import './contact.css'
import React from 'react'
import contatos from '../../dados/contatos'

const target = '_blank'

const Contacts = () => {
    return (
        <ul className='contacts'>
            {contatos.map(contato =>
                <li className="contact">
                    <a href={contato.link} target={target} rel="noreferrer">
                        <img src={contato.icon} alt="Icone_LinkedIn" />{contato.subtitle}
                    </a>
                </li>
                )
            }
        </ul>
    )
}

export default Contacts