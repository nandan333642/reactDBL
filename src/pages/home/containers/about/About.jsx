import React, {StyleSheets} from 'react'
import './about.css';
import {Countdown} from '../../../../components';
import {concert1, concert2, concert3} from '../../../../assets';
import flexvid from '../../../../assets/flexvid.mp4';
import ReactPlayer from 'react-player';

const About = () => {
  return (
        <div className="bt_about">
            <Countdown/>
            <div className="bt_about-sec2">
                <div className="bt_about-sec2-video">
                    <ReactPlayer url={flexvid} controls={true} width="90%"/>
                </div>
                
                <div className="bt_about-quote">
                    <h2>"Fusion of traditions, connections unfold, <b className="highlighter">Boscotsav's cultural stories </b>untold."</h2>
                    
                </div>
                <div className="bt_about-satisfactions">
                    <div className="bt_about-satisfactions-data">
                        <h2>70+</h2>
                        <p>Events</p>
                    </div>
                    <div className="vertbar"></div>
                    <div className="bt_about-satisfactions-data">
                        <h2>20+</h2>
                        <p>Schools</p>
                    </div>
                    <div className="vertbar"></div>
                    <div className="bt_about-satisfactions-data">
                        <h2>500+</h2>
                        <p>Participants</p>
                    </div>
                    <div className="vertbar"></div>
                    <div className="bt_about-satisfactions-data">
                        <h2>100+</h2>
                        <p>Staffs</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default About