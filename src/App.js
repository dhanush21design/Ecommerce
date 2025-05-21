import './App.css';
import Hom from './pages/Hom';
import Nav from './component/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './Contact';
import Newarrivals from './pages/Newarrivals';

import Catalogue from './pages/Catalogue';
import Bottom from './component/Bottom';


function App(){
  return (

    <>
    <BrowserRouter>
     
     <Nav/>
     
    <Routes>
<Route path='/' element={<Hom/>}/>

<Route path='/about' element={<About/>}/>


<Route path='/shop' element={<Shop/>}/>

<Route path='/contact' element={<Contact/>}/>

<Route path='/newarrivals' element={<Newarrivals/>}/>

<Route path='/cart' element={<Catalogue/>}/>




    </Routes>
<Bottom/> 
    </BrowserRouter>

    
    
    </>
  )
}

export default App