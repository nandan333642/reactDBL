import React from 'react'
import './pagecomp.css';
import Navbar from '../navbar/Navbar'
const PageComponent = ({breadcrumb, name}) => {
  return (
    <div className="bt_pagecomponent">
        <Navbar/>
        <div className="bt_pagecomponent-texts">
            <p>{breadcrumb}</p>
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default PageComponent