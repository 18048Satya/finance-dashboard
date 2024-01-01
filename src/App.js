import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import RightSide from './components/RightSide/RightSide'


function App() {
  return (
    <div className='container'>
    <div className='layout'>
    <Sidebar/>
    <Main/>
    <RightSide/>
    </div>   
    </div>                                                   
  )
}

export default App