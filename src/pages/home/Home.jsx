import './home.css';
import {Navbar, Footer} from '../../components';
import {Header, About, Gallery, Events, Members} from './containers';

function Home() {
  return (
    <div className="bt_home">
      <div className="Home">
          <Navbar/>
         
      </div>
      <div className="bt_home_container">
        <Header/>
        <About/>
        <Gallery/>
        <Events/>
        <div className="bt_home_container_back">
          <Members/>
          <div className="bt_home_container_back-rightball"></div>
          <Footer/>
        </div>     
      </div>
    </div>
  );
}

export default Home;
