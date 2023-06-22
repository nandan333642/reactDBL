import React from 'react'
import './testimonial.css';
import { concert1 } from '../../assets';
const Testimonial = () => {
  return (
        <div className="bt_testimonial">
            <div className="bt_testimonial-image">
                <img src={concert1}/>
            </div>
            <div className="bt_testimonial-rating">
                <p>The Salesian Family is a spiritual movement which brings together all the groups which share Don Bosco's mission to youth and work in his spirit. Don Bosco himself founded the Salesian Society, the Salesian Sisters, the Cooperators and Past Pupils.</p>
            </div>
            <div className="bt_testimonial-position">
                <h2>- Cameron Williamson</h2>
                <p>CEO at Google</p>
            </div>
        </div>
    )
}

export default Testimonial