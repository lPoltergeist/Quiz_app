import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


<link rel="stylesheet" type="text/css" href="style.css"/>;


class App extends Component  {
  render(){
  return (
  <div className="container">

     <h1 id="Choose" className='flex-col shadow-2xl' > Difficulty </h1> 
     <div >
       <NavLink  to='/Easy'> <button  id='button' > Easy </button></NavLink> 
    <NavLink  to='/Medium'> <button id='button' > Medium </button> </NavLink>
    <NavLink  to='/Hard'> <button  id='button'  > Hard </button> </NavLink>
</div>
   </div>
  );
}
}

export default App;