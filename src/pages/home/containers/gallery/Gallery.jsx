import React, { useState, useEffect } from 'react';
import './gallery.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { spo1, spo2, spo3, spo4, gallery } from '../../../../assets';

const Gallery = () => {
  return (
    <div className="bt_gallery">
      <div className="bt_gallery-text">
        <div className="bt_gallery-text-part1">
          <p>
            The <b className="highlighter">Majestic</b>
          </p>
          <h2>Boscotsav: Previous Chapter</h2>
        </div>
      </div>
      <div className="bt_gallery-images">
        <p>PREVIOUSLY</p>
        <div className="bt_gallery-images-pics">
          <div className="imageballs"></div>
          
          <img src={gallery}/>
        </div>
      </div>

      <p>Take me to <Link to={`/gallery`}><b className="highlighter">Gallery &#8689;</b></Link> </p>
    </div>
  );
};

export default Gallery;
