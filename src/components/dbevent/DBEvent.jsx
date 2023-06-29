
import React, { useState, useEffect } from 'react';
import './dbevent.css';
import jsonData from '../../jsonData.json';
import { json, useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { PageComponent, Footer } from '../../components';

const DBEvent = ({currentPage}) => {
  const { eventName } = useParams();
  const [event, setEvent] = useState([]);
  
  useEffect(() => {
    const selectedEvent = findEvent(eventName);
    setEvent(selectedEvent);
    console.log(currentPage)
  }, [eventName]);

  const findEvent = (eventName) => {
    console.log(eventName); 
    for (let i = 0; i < jsonData.events.length; i++) {
      if (jsonData.events[i].name === eventName) {
        return jsonData.events[i];
      }
    }
    return null;
  };

  const renderEvent = () => {
    if (!event) {
      return <div>Loading...</div>;
    } else {
      const { logo, ...eventData } = event;
      return (
        <div className="bt_dbevent-event">
          <div className="bt_dbevent-event-text">
            <h2 className="bt_dbevent-text-title">{eventData.name}</h2>

            <div className="bt_dbevent-event-elements">
              {Object.entries(eventData).map(([key, value], index) => {
                if (key === 'children') {
                  return (
                    <div key={index}>
                      {value.map((child, childIndex) => (
                        <div key={childIndex} className="childrenMap">
                          {Object.entries(child).map(([childKey, childValue]) => (
                            <div key={childKey}>
                              <span>{childKey.charAt(0).toUpperCase() + childKey.slice(1).replaceAll("_"," ")}: </span>
                              <span>{childValue.replaceAll("_"," ")}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                } else if (Array.isArray(value)) {
                  return (
                    <div key={index} className="arrayElements">
                      <h3>{key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")}</h3>
                      {value.map((item, itemIndex) => (
                        <div key={itemIndex} className="itemlist"><li>{item}</li></div>
                      ))}
                    </div>
                  );
                } else if (typeof value === 'object') {
                  return (
                    <div key={index}>
                      <h3><b className="highlighter">{key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_"," ")}`</b></h3>
                      {Object.entries(value).map(([nestedKey, nestedValue], nestedIndex) => (
                        <div key={nestedIndex}>
                          <span>{nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1).replaceAll("_", " ")}: </span>
                          <span>{nestedValue}</span>
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <span className="individualSpan">{key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")}: </span>
                      <span>{value}</span>
                    </div>
                  );
                }
            })} 
            </div>
          </div>


          <div>
            <Link to={`/events`}><button className="button">Back</button></Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bt_dbevent">
      <PageComponent breadcrumb={`Home/Events/${eventName}`} name="Events Page" />
      {renderEvent()}
      <Footer />
    </div>
  );
};

export default DBEvent;
