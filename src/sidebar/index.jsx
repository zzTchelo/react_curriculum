import Contacts from '../contact'
import Profile from '../profile'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile />
            <Contacts />
        </div>
    )
}

export default Sidebar