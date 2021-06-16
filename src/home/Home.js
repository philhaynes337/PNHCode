import React, { Component } from 'react';
import Ads from '../ads/Ads';
import ReactSites from '../React/Articles/ReactStart/images/ReactSites.jpg'
import ReactHelloImg from '../React/Articles/HelloWorld/images/ReactCode.jpg'
import './Home.css';


class Home extends Component {

    render() {

        return(
            <div className='content-h'>
                <h1>Newest Content</h1>
                <br />
                <Ads />
                <br />
                <article>
                    <div className='row-h'>
                        <h2>
                            <a href='/reacthelloworld'>
                                React Hello World!
                            </a>
                        </h2>
                    </div>
                    <div className='row-h'>
                        <div className='col-h'>
                            <a href='/reacthelloworld'>
                                <img src={ReactHelloImg} className='img-a' alt='React Sites' />
                            </a>
                        </div>
                    
                        <div className='col-h'>
                            <div className='row-h'>
                                Date 2021-06-16
                            </div>
                            <div>
                            As with every new language we start with the Hello World program. These Hello Programs are a great way to understand what the backbone of the program is. It is also a great starting point. Now it is time to open your code editor and get to coding!
                            </div>
      
                        </div>
                    </div>
                </article>
                <article>
                    <div className='row-h'>
                        <h2>
                            <a href='/reactstart'>
                                Getting Started With React
                            </a>
                        </h2>
                    </div>
                    <div className='row-h'>
                        <div className='col-h'>
                            <a href='/reactstart'>
                                <img src={ReactSites} className='img-a' alt='React Sites' />
                            </a>
                        </div>
                    
                        <div className='col-h'>
                            <div className='row-h'>
                                Date 2021-06-14
                            </div>
                            <div>
                                This tutorial is about how to get up and running with ReactJS. Tells you what you need to download and basic CMD commands. Learn with this easy step-by-step process!
                            </div>
      
                        </div>
                    </div>
                </article>
                
            </div>
        )
    }
}

export default Home;