import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Tilt from 'react-tilt'
import brain from './components/brain.png'


<link rel="stylesheet" type="text/css" href="style.css"/>;


class App extends Component  {
  render(){
  return (
  <div className="ma4 mt0 ">
<Tilt className="Tilt br2 " options={{ max : 35 }} style={{ height: 300, width: 300 }} >
 <div className="Tilt-innerpa3 "> <img id='logo' style={{paddingTop: '5px', width: '290px', height: '290px' }} src={brain} alt='brain'/> </div>
</Tilt>
     
     
<NavLink  to='/Menu'> <button  className='start' > Start </button></NavLink>
    

   </div>
  );
}
}

export default App;