import React from 'react'
import { profileData } from '../../Data/Data';
import './Profile.css'

function Profile() {
  return (
    <div className="profile">
        {profileData.map((item)=>{
            return( 
        <div className='profile-details'>
            <img src={item.avatar} alt="profile Avatar" className='avatar' />
            <div className="info">
             <h2>{item.name}</h2>
             <p>{item.username}</p>
             <p>{item.bio}</p>
         </div>
         </div>
         )
           
        })}
        
    </div>
  )
}

export default Profile