import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
        <div className="bt_footer">
            <div className="bt_footer-topsec">
                <div className="bt_footer-topsec-getready">
                    <h2><b className="highlighter">Colors</b> Collide, <br/><b className="highlighter">Cultures</b> Unite, <br/><b className="highlighter">Boscotsav</b> Shines Bright!</h2>
                    <p>75 Events  |  1 Day  |  1 Venue</p>
                </div>
                <div className="bt_footer-topsec-subdate">
                    <h2>15th July, 2023</h2>
                </div>
            </div>

            <div className="bt_footer-copyrights">
                <div className="bt_footer-copyrights-cpr">
                    <p>&copy; Copyrights <b className="highlighter">@2023</b>. All Rights Reserved.</p>
                    <p>Made with ❤️ by the <b className="highlighter"><Link to={`https://www.instagram.com/https.venkat`}>Tech Committee</Link></b>, Boscotsav.</p>
                </div>
                <div className="bt_footer-copyrights-links">
                    <p><Link to={`https://www.facebook.com/DBL01`}>Facebook</Link></p>
                    <p><Link to={`https://www.youtube.com/@techveinitsolutionsprivate9755`}>Youtube</Link></p>
                    <p><Link to={`https://www.instagram.com/boscotsav2k23/`}>Instagram</Link></p>
                    <p><Link to={`https://twitter.com/donboscoschool`}>Twitter</Link></p>
                </div>

            </div>
        </div>

    )
}

export default Footer