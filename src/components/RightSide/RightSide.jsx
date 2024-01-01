import React from 'react'
import './RightSide.css'
import Profile from './Profile/Profile'
import Saving from './Savings/Saving'


function RightSide() {
  return (
  <div className="Rightside">
    <Profile/>
    <h3>My Saving  Invesments</h3>
    <Saving/>

  </div>
  )
}

export default RightSide