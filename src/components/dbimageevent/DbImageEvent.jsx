import React from 'react'
import './dbimageevent.css';
import {school} from '../../assets';
const DbImageEvent = ({name}) => {
  return (
        <div className="bt_dbimageevent" >
            <h2>{name}</h2>
            <img src={school}/>
        </div>
    )
}

export default DbImageEvent