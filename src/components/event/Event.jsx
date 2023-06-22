import React from 'react'
import './event.css';


const Event = ({date, image, title, venue}) => {
  return (
        <div className="bt_event">
            <div className="bt_event-date">
                <h2><b className="highlighter">{date}</b></h2>
            </div>
            <div className="bt_event-image">
                <img src={image}/>
            </div>
            <div className="bt_event-text">
                <h2>{title}</h2>
                <p>{venue}</p>
            </div>

        </div>
    )
}

export default Event