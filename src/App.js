import React from 'react';
import {  Routes, Route, useLocation  } from 'react-router-dom';

import {Navbar} from './components/componentsindex';



import Home from './router/Home';


export function App() {
  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  return (
  <Navbar>
  
      
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />


      </Routes>

 
</Navbar>
    
  );

}

export default App;