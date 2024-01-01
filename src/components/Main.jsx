import React from 'react'
import './Main.css'
import Cards from './Cards/Cards'
import Table from './Table/Table'


function Main() {
  return (
    <div className="Main">
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
  )
}

export default Main