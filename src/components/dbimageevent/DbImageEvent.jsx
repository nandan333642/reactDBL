import React from 'react'
import './dbimageevent.css';
import {school} from '../../assets';
const DbImageEvent = ({name, logo}) => {
    const capitalizeWords = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      };
  return (
        <div className="bt_dbimageevent" >
            <h2>{capitalizeWords(name)}</h2>

            <div className="image-container">
                <div className="image-wrapper">
                    <div className="image-inner">
                        <img src={`${logo}`}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DbImageEvent