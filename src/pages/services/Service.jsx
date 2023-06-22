import React, {useState} from 'react'
import './services.css';
import { PageComponent, Footer } from '../../components';
const Service = () => {
  return (
        <div className="bt_services">
            <PageComponent breadcrumb="Home/Contact Us" name="Contact Us" />
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrFCxuAebLM13dIX?backgroundColor=yellow" frameborder="0" onmousewheel="" width="90%" height="533"></iframe>
            <Footer/>
        </div>
    )
}

export default Service