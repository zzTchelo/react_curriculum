import './contact.css'
import React from 'react'

const Contacts = (props) => {
    return (
            <li className="contact"><img src={props.icon} alt="Icone_LinkedIn" />{props.subtitle}</li>
    )
}

export default Contacts