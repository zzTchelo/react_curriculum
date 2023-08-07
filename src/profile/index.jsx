import './profile.css'
const profile_pic = require('../assets/profile_pic.jpg');


const Profile = () => {
    return (
        <div className="profile">
            <img src={profile_pic} alt="Profile Pic" />
            <label htmlFor="Profile" className="profile_name">João Marcelo Silva Santos</label>
        </div>

    )
}

export default Profile