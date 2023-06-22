import React from 'react'
import './about.css';
import {Navbar, PageComponent, Footer} from '../../components';
import {AboutBoscotsav, DonboscoAbout} from './aboutcontainer';
const About = () => {
  return (
    <div className="bt_about">
        <PageComponent breadcrumb="Home/About" name="About Page"/>
        <AboutBoscotsav/>
        <DonboscoAbout/>
        <Footer/>
    </div>
  )
}

export default About