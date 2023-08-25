import React from 'react'
import './Profile.css'
import pic from '../../assets/FormalPic.jpg'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className='profile'>
        <div className="images">
            <div className="banner"></div>
            <img src={pic} alt="dp" height={70} width={70}/>
            <div className="details">
                <span>User Sharma</span>
                <span>@testing</span>
            </div>
        </div>
        <div className="follows">
            <span>
                <p>3</p>
                <p>Following</p>
            </span>
            <span>
                <p>0</p>
                <p>Follower</p>
            </span>
        </div>
        <div className="find">
            <Link to="#">Find new People</Link>
        </div>
    </div>
  )
}

export default Profile