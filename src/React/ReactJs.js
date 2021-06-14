import React, { Component } from 'react';
import ReactSites from '../React/Articles/ReactStart/images/ReactSites.jpg'


class ReactJs extends Component {

    render() {

        return (
            <div>
                <h1>
                    Learn React
                </h1>
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

export default ReactJs;