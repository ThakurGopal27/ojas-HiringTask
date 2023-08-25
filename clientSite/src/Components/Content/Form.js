import React from 'react'
import './Form.css'
import {data} from '../../data'
import gallery from '../../assets/gallery.png'
const Form = () => {

  return (
    <div className='form'>
        <form action="">
            <div className="create_post">
            <input type="text" id='post' placeholder='Create New Post'/>
            <input type="button" id='submit' value="Post"/>
            </div>
            <div className="choose">
            {
                data && data.map((data,idx)=>{
                    return (
                    <div className="buttons" key={idx}>
                    <label for="fileInput" class="custom-file-label">
                    <img src={data.image} alt="" height={20} style={{filter :`drop-shadow(2px 2px 5px ${data.color})`}}/>{" "}
                    {data.title} </label>
                    <input type="file" id="fileInput" class="custom-file-input"/>
                    </div>
                    )
                    
                    
                })
            }
                         
            </div>
        </form>
    </div>
  )
}

export default Form