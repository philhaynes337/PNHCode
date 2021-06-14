import React, { Component } from 'react';

class About extends Component {

    render() {

        return(
            <div>
                <h1>
                    About PNHCode
                </h1>
                <section>
                    <h2>Start</h2>
                    The journey started 21 years ago with HTML. Quickly grew into Java and JavaScript. The journey has been a difficult one and we wanted to give back.
                    The coding learning process is never an easy one and we understand this. 
                </section>
                <section>
                    <h2>Learning</h2>
                    As already stated learning how to code is not an easy one. We understand this. The goal here is to teach easily step by step without the nonsense of most learning sites. On top of this, we welcome feedback to help with our process. Please feel free to send us a message on how we can improve the website!
                </section>
                <section>
                    <h2>Where We Are Now</h2>
                    Currently, we are in the MVP (Minimum Viable Product) stage of the website.  We are in the process of building the ReactJS tutorials. ReactJS is leading the way of web development and essential to anyone serious about it.
                </section>
                <section>
                    <h2>Future</h2>
                    The future will bring more than just ReactJS. Plans are to include JavaScript, HTML, CSS, Java, and many more! 
                </section>
            </div>
        )
    }
}

export default About;