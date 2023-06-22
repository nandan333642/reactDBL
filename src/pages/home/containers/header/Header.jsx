import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import concert from '../../../../assets/concert.jpg';

const Header = () => {
  return (
      <div className="bt_header">


    
        <div className="bt_header-text">
          
            <div className="bt_header-maintext">
              <div className="bt_header-eventname">
                <p>Don Bosco's Most Celebrated</p>
              </div>
              <h2>
                With new events,<br/> <b className="highlighter">Boscotsav'<b className="specialhigh">23</b></b><br/> is Back.
              </h2>
            </div>
            <div className="bt_header-learnmore">
              <div className="bu">
                <Link to={`/about`}><button className="button">LEARN MORE</button></Link>
              </div>
            </div>
        </div>
        <div className="balls"></div>
        <div className="bt_header-video">
          <img src={concert}/>
        </div>
        

      </div>
    )
}

export default Header