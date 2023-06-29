import React from 'react'
import { PageComponent, Footer } from '../../components';
import './teams.css';
import { school } from '../../assets';
import Member from './components/Member';
const Teams = () => {
  return (
        <div className="bt_teams">
            <PageComponent breadcrumb="Home/Tech Committee" name="Tech Committee"/>
            <div className="bt_teams-teamslist">
                <Member image={school} name="Krish Jaiswal(Venkat)" position="Website" links={["F","https://twitter.com/https_venkat","https://www.instagram.com/https.venkat/","https://www.youtube.com/@projectjava"]}/>
                <Member image={school} name="Adhiraj Saha" position="Gallery Trailer Video" links={["F","T","https://www.instagram.com/lmaoadhiraj/","Y"]}/>
                <Member image={school} name="Sinchan Neogy" position="Teaser Video" links={["F","T","https://www.instagram.com/myself_sinchan/","https://www.youtube.com/@SinchanNeogy"]}/>
                <Member image={school} name="Ankit Ghosh" position="Homepage Trailer Video" links={["F","T","https://www.instagram.com/anx1t_fx/","Y"]}/>
                <Member image={school} name="Shreyan Naha" position="Event Flexes" links={["F","T","https://www.instagram.com/nahashreyan14/","Y"]}/>
                <Member image={school} name="Aritra Ghosh" position="Gallery Trailer Video" links={["F","T","https://www.instagram.com/yoaritraachill/","Y"]}/>
                <Member image={school} name="Subhayan Chakraborty" position="Gallery Trailer Video" links={["F","T","https://www.instagram.com/shuubh.__/","Y "]}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Teams