import React, {useState, useEffect} from 'react';
import './navbar.css';
import {Divide as Hamburger} from 'hamburger-react';

import {Outlet, Link} from 'react-router-dom';

const styles = {
  textDecoration: 'none',
  color: 'var(--color-white)',
  fontFamily: 'var(--font-family)'
};

const styles2 = {
  textDecoration: 'none',
  color: 'var(--color-background)',
  fontFamily: 'var(--font-family)'
};



const Navbar = () => {
  
  const [isOpen, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 945);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  const hammenu = () => {
    return (<div className="hammenu-links">
        <ul className="hammenu-links-ul">
            <Link to="/" style={styles2}><li>Home</li></Link>
            <Link to="/events" style={styles2}><li>Events</li></Link>
            <Link to="/contacts" style={styles2}><li>Contacts</li></Link>
            <Link to="/gallery" style={styles2}><li>Gallery</li></Link>
            <Link to="/about"  style={styles2}><li>About</li></Link>
            <Link to="/teams"  style={styles2}><li>Tech Committee</li></Link>           
          </ul>
    </div>)
  };

  useEffect(() => {
    // Update 'isDesktop' state on window resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 945);
    };

  window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className="bt_navbar">
      <div className='bt_navbar_set'>
        <div className="bt_navbar-heading">
          <h2 className="bt_navbar-heading-h2"><b className="highlighter">Bosco</b>tsav 2<b className="highlighter">K</b>23</h2>
        </div>

        <div className="bt_navbar-menu">
        <ul className="bt_navbar-menu-list">
          <Link to="/" style={styles}><li>Home</li></Link>
            <Link to="/events" style={styles}><li>Events</li></Link>
            <Link to="/contacts" style={styles}><li>Contacts</li></Link>
            <Link to="/gallery" style={styles}><li>Gallery</li></Link>
            <Link to="/about" style={styles}><li>About</li></Link>
            <Link to="/teams"  style={styles}> <button className="button"><li>Tech Committee</li></button></Link>
          </ul>
        </div>

        {isDesktop ? null : (
          <div>
            <Hamburger color="var(--color-white)" toggle={handleClick} size={30} toggled={isOpen} className="ham"/> 
            <div className="bt_navbar_set-hammenu">
              {isOpen ? hammenu() : null}
            </div>
          </div>
        )}

        
      </div>
    

      <div className="horizontal-line"></div>

    </div>
  )
}

export default Navbar