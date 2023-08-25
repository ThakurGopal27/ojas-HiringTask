import React from 'react'
import './Home.css'
import Profile from '../Profile/Profile'
import Content from '../Content/Content'
const Home = () => {
  return (
    <div className='home'>
        <div className="profile-column">
            <Profile/>
        </div>
        <div className="content-column">
            <Content/>
        </div>
        <div className="required">
            <span>Features Required</span>
            <ul>
                <li>Login/logout with JWT</li>
                <li>Registration</li>
                <li>Tweet create , edit ,delete</li>
                <li>Fully Responsive</li>
            </ul>
        </div>
    </div>
  )
}

export default Home