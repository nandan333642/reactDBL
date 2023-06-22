import React from 'react'
import './aboutboscotsav.css';
import { poster } from '../../../../assets';
const AboutBoscotsav = () => {
  return (
    <div className="bt_aboutboscotsav">
        <div className="bt_aboutboscotsav-image">
            <h2>2k23</h2>
            <img src={poster}/>
        </div>
        <div className="bt_aboutboscotsav-text">
            <p>About Boscotsav</p>
            <h2><b className="highlighter">Boscotsav</b></h2>
            <p>Boscotsav ,where we come together to celebrate the spirit of healthy competition, creativity, and camaraderie., a platform that not only showcases our talents but also fosters friendship and collaboration among our educational institutions. This time we are ready to set a benchmark in the history of inter school events by organising 75 different events for students of all age group in one day . A platform  which will witness mesmerizing performances, unforgettable moments, and appreciate the hard work and dedication poured into each act.

This event represents the culmination of hard work, dedication, and countless hours of preparation by students, teachers and salesians  alike. It serves as a testament to our collective commitment to nurturing talent, promoting holistic growth, and encouraging excellence in all fields. It is a celebration of our shared passion for knowledge, arts, sports, and the pursuit of excellence.
</p>
            <div className="bt_aboutboscotsav-balls"></div>
        </div>
    </div>
  )
}

export default AboutBoscotsav