import React from 'react'
import Header from './admin/Header'
import Home from './admin/Home'
import Sidebar from './admin/Sidebar'
import styles from './admin/Admin.css'
import { useEffect } from 'react'



const Dashboard= () => {
  return (
    <div className='grid-container'>
      {/* <Header /> */}
      <Sidebar />
      <Home/>
    </div>
  )
}

export default Dashboard

