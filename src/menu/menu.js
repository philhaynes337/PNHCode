import React, { Component } from 'react';
import MenuLinks from './MenuLinks';
import './menu.css';

class Menu extends Component {

    render() {

        return(
            
          <div>
            <div className='menu-mob'>
              <div id="menuToggle">

                <input type="checkbox" />
                
                <div className='menu-txt'>
                  Menu
                </div>
                <span></span>
                <span></span>
                <span></span>
                  <ul id="menu">
                    <MenuLinks />
                  </ul>
                

              </div>
            </div>
            <div id='menu-desk'>
              <div id='menuToggle-desk'>
                <ul id="menu-desk-ul">
                  <MenuLinks />
                </ul>
              </div>
            </div>
          </div>

            
        )
    }
}

export default Menu;