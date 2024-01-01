import React , { useState } from 'react'
import Logo from '../../src/images/logo.png'
import './Sidebar.css'
import { SidebarData } from './Data/Data'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
function Sidebar() {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const sidebarVariants = {
    true:{
      left:'0'
    },
    false:{
      left:'-60%'
    }

  }
  return (
    <>
    <div className='bars' style={expanded?{left:"0%"}:{left:"5%"}}
 onClick={() => setExpanded(!expanded)}
 >
      <MenuIcon/>
      </div>
    <motion.div className="sidebar"
     variants={sidebarVariants}
     animate={window.innerWidth<=768 ?`${expanded}`:''}
    >
      <div className='closebar'
      onClick={() => setExpanded(!expanded)}>
        <CloseIcon/>
      </div>
     
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          p<span>a</span>yee
        </span>
      </div>
      <div className="menu">
       {SidebarData.map((item, index)=>{ 
          return(
            <div className={selected === index?'menuItem active':'menuItem'}
            key={index}
            onClick={()=>setSelected(index) }
            >
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
       })}
       <div className="menuItem ">
        <LogoutIcon/>
       </div>

      </div>
    </motion.div>
    </>
  )
}

export default Sidebar