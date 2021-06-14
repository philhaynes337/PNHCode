import React, { Component } from 'react';
import Ads from '../ads/Ads';
import ReactSites from '../React/Articles/ReactStart/images/ReactSites.jpg'
import './Home.css';

class Home extends Component {

    render() {

        return(
            <div>
                <h1>Newest Content</h1>
                <br />
                <Ads />
                <br />
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