import './contact.css'
import React from 'react'

const linkedinIcon = require('../assets/icons8-linkedin-144.png')
const instagramIcon = require('../assets/icons8-instagram-96.png')
const outlookIcon = require('../assets/icons8-ms-outlook-144.png')
const githubIcon = require('../assets/icons8-github-96.png')


const Contacts = () => {
    return (
        <ul className="contacts">
            <li className="contact"><img src={linkedinIcon} alt="Icone_LinkedIn" />João Marcelo Silva Santos</li>
            <li className="contact"><img src={githubIcon} alt="Icone_Github" />zzTchelo</li>
            <li className="contact"><img src={instagramIcon} alt="Icone_Instagram" />João Marcelo Silva Santos</li>
            <li className="contact"><img src={outlookIcon} alt="Icone_Outlook" />jmarcelo06@outlook.com</li>
        </ul>
    )
}

export default Contacts