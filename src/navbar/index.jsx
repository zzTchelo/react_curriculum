import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar'>
            <li className='item-navbar'>
                <Link to='/Formacoes'>
                    Formações
                </Link>
            </li>
            <li className='item-navbar'>
                <Link to='/Experiencias'>
                    Experiências
                </Link>
            </li>
            <li className='item-navbar'>Certificados</li>
            <li className='item-navbar'>Habilidades</li>
            <li className='item-navbar'>Projetos</li>
        </ul>
    )
}

export default Navbar