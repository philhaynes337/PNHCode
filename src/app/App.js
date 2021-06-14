import React, { Component } from 'react';
import Menu from '../menu/menu';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import ReactJs from '../React/ReactJs';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../footer/Footer';
//import RouterContent from '../RouterContent/RouterContent';
import ReactStart from '../React/Articles/ReactStart/ReactStart';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <>
        <header className='header'>
          <Header />
        </header>
  
        <div className='row'>
          <div className='menu col'>
            <Menu />
          </div>
        
        
          <div className='content col'>
          <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/reactjs' component={ReactJs} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/reactstart' component={ReactStart} />
          </Switch>
            
          </div>
        </div>
        
        
          <Footer />
        
        
      </>
    );

  }
}

export default App;
