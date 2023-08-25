import React from 'react'
import './Card.css'
import dp from '../../assets/FormalPic.jpg'
import menu from '../../assets/options.png'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {FaComment} from 'react-icons/fa'
import {FaShareAlt} from 'react-icons/fa'

const Card = () => {
  return (
    <div className='card'>
        <div className="profilePic">
          <img src={dp} alt="dp" height={30} width={30}/>
        </div>
        <div className="tweets">
            <div className="user_name">
              <div className="name">
              <span>User Sharma</span>
              <span>@testing</span>
              </div>
              <img src={menu} alt="" height={20} width={20}/>
            </div>
            <span style={{color:"grey" , fontSize:"12px" , fontWeight:"500"}}>3m ago</span>
            <div className="tweet" >
              <span style={{color:"white" , fontSize:"15px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, pariatur vitae. Recusandae, quisquam nesciunt? Fuga, eveniet! Maxime consequuntur, fuga... </span>
              <Link style={{color:"#55adee" ,textDecoration:"none", fontWeight:"500",fontSize:"14px"}} >Read More</Link>
            </div>
           
            <div className="shares">
                <button>
                <FaHeart color='white'/>{" "}
                  Like
                </button>
                <button>
                <FaRetweet/>
                  Retweet
                </button>
                <button>
                <FaComment/>
                  Comment
                </button>
                <button>
                  <FaShareAlt/>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Card