import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {

    render() {

        return(
            


  <div id="menuToggle">

    <input type="checkbox" />
    

    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      <a href='/'><li>Home</li></a>
      <a href='/reactjs'><li>React</li></a>
      <a href='/about'><li>About</li></a>
      <a href='/contact'><li>Contact</li></a>
 
    </ul>
  </div>

            
        )
    }
}

export default Menu;