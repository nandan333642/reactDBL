import React from 'react'
import './member.css';
import {insta, fb, twitter, yt} from '../../../assets';

const arr = [
    fb,
    twitter,
    insta,
    yt
]
const Member = ({image, name, position, links}) => {
  return (
        <div className="bt_teammember">
            <div className="bt_teammember-image">
                <img src={image}/>
            </div>
            <div className="bt_teammember-namepos">
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
            <div className="bt_member-links">
                {links.map((link, index) => {
                        return <a href={link}><img src={arr[index]} className="bt_teammember-links-icon"/></a>;
                    })}
            </div>
        </div>
    )
}

export default Member