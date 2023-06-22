import React from 'react'
import './members.css';
import {Member} from '../../../../components';
import {insta, fb, twitter, yt, school} from '../../../../assets';

const Members = () => {
  return (
        <div className="bt_members">
            <div className="bt_members-title">
                <h2>Heads of Boscotsav'23</h2>
            </div>
            <div className="bt_members-specialhigh">
                <h2>Don Bosco Liluah</h2>
            </div>
            <div className="bt_members-memberlist">
                <Member image={school} name="Father Manoj Jose" position="Principal" links={["F","T","I","Y"]}/>
                <Member image={school} name="Ma'am Aparna Sen" position="Head of Boscotsav" links={["F","T","I","Y"]}/>
                <Member image={school} name="Sir Snehashis Kunti" position="Tech Head of Boscotsav" links={["F","T","I","Y"]}/>
                <Member image={school} name="Dhiraj Saraowgi" position="School Prefect" links={["F","T","https://www.instagram.com/_denounce_me_/","Y"]}/>
            </div>

        </div>
    )
}

export default Members