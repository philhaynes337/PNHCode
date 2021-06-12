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
      <a href="#a"><li>Home</li></a>
      <a href="#a"><li>React</li></a>
      <a href="#a"><li>About</li></a>
      <a href="#a"><li>Contact</li></a>
 
    </ul>
  </div>

            
        )
    }
}

export default Menu;