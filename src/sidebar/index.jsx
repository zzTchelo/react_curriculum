import Contacts from './contact'
import Profile from './profile'
import './sidebar.css'
import contatos from '../dados/contatos'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile />
            <ul className='contacts'>
                {contatos.map(contato =>
                    <Contacts 
                        icon = {contato.icon}
                        subtitle = {contato.subtitle}
                    />
                )}
            </ul>
        </div>
    )
}

export default Sidebar