import React from 'react'
import './events.css';
import {westdance, pulse, grooves} from '../../../../assets'
import {Event} from '../../../../components';

import {Link} from 'react-router-dom';


const Events = () => {
  

  return (
      <div className="bt_events">
        <div className="bt_events-theme">
          <h2 className="bt_events-theme-text">CULTURAS EN CONTACTO</h2>
          <p>Cultures in Contact</p>
        </div>
        <div className="bt_events_section">
          <div className="bt_events_section-header">
            <h2>Glimpse of Events</h2>
            <div className="bt_events_section-header-balls"></div>
          </div>
          <div className="bt_events_section-header-balls2"></div>
          <div className="bt_events_section-eventslist">
              <Event date="I" image={westdance} title="Western Dance" venue="St.John Paul II Auditorium"/>
              <Event date="II" image={grooves} title="Bosco Grooves" venue="St.John Paul II Auditorium"/>
              <Event date="III" image={pulse} title="Bosco Pulse" venue="St.John Paul II Auditorium"/>
              <p>Take me to <b className="highlighter"><Link to={`/events`}>Events &#10169;</Link></b> </p>
          </div>

          
        </div>
        
      </div>
  )
}

export default Events