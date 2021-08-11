import './App.css';
import Carousel from 'react-elastic-carousel';
import PicCard from './PicCard';
import './styles.css';
import Home from "./Home";

function App() {
  return (
    <div className="App">
            <Home/>
              <Carousel>
                <PicCard src="/css__logo.png"/>
                <PicCard src="/net__logo.png"/>
                <PicCard src="/react__logo.png"/>
                <PicCard src="/linkedin__logo.png"/>
                <PicCard src="/Fresh-Healthy.png"/>
                {/* <PicCard number="3"/> */}
              </Carousel>
    </div>
  );
}

export default App;
