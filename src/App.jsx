import './assets/style/style.scss'

import Header from './components/Header';
import Hero from './components/Hero';
import './assets/images/hero.png'
import Services from './components/Services';
import Popular_tires from './components/Popular_tires';
import Auto_discs from './components/Auto_discs';
import Shares from './components/Shares';
import About from './components/About';
import Footer from './components/Footer';
import Truck_tire from './components/Truck_tire';
import Auto_tire from './components/Auto_tire';
import Moto_tire from './components/Moto_tire'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'animate.css'

function App() {
  return (
   <div>
      <Header/>
        <Hero/>
         <Services/>
           <Router>
             <Popular_tires/>
                <Routes>
                   <Route path='/' element={<Auto_tire/>}/>
                   <Route path='/trucktire' element={<Truck_tire/>}/>
                   <Route path='/mototire' element={<Moto_tire/>}/>
                </Routes>
           </Router>
          <Auto_discs/>
         <Shares/>
       <About/>
     <Footer/>
</div>
  );
}

export default App;
