import './navbar.css'
import { Link } from 'react-router-dom'
import rotas from '../dados/rotas'

const Navbar = () => {
    return (
        <ul className='navbar'>
            {rotas.map(rota =>{
                return <li className='item-navbar'><Link to={rota.link}>{rota.label}</Link></li>
            })}
        </ul>
    )
}

export default Navbar