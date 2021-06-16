import React, { Component } from 'react';
import HWImg1 from './images/hw-img1.PNG';
import HWImg2 from './images/hw-img2.PNG';
import HWImg3 from './images/hw-img3.PNG';
import HWImg4 from './images/hw-img4.PNG';
import HWImg5 from './images/hw-img5.PNG';
import HWImg6 from './images/hw-img6.PNG';
import HWImg7 from './images/hw-img7.png';
import HWImg8 from './images/hw-img8.png';
import HWImg9 from './images/hw-img9.png';
import HWImg10 from './images/hw-img10.png';
import './HelloWorld.css'

class HelloWorld extends Component {

    render() {

        return(
            <div>
                                <h1>Hello World!</h1>

<section>
    <h2>Getting Started</h2>

    <p>
        As with every new language we start with the Hello World program. These Hello Programs are a great way to understand what the backbone of the program is. It is also a great starting point. Now it is time to open your code editor and get to coding!
    </p>
    <img src={HWImg1} className='hw-img-1' alt='Hello World!' />

</section>

<section>
    <p>
        Here I am using Visual Studio Code with I do recommend. You will need to click File -&#62; Open Folder and select the folder where your react app was created.
    
    </p>
    <img src={HWImg2} className='hw-img-2' alt='Hello World!' />
</section>

<section>
    <p>
        Now open your command prompt within VSC (Terminal -&#62; New Terminal)
        <br />
            <img src={HWImg3} className='hw-img-3' alt='Hello World!' />
        <br />

        This will open a command prompt terminal within VSC. Example below.
        <br />
            <img src={HWImg4} className='hw-img-4' alt='Hello World!' />
        <br />
    </p>
</section>

<section>
    <p>
        Now type the command npm run start
            <br />
                <img src={HWImg7} className='hw-img-7' alt='Hello World!' />
    </p>
    <p>
        After it is done building it should look like this:
            <br />
                <img src={HWImg8} className='hw-img-8' alt='Hello World!' />
    </p>
</section>

<section>
    <p>
    After it has compiled your default browser should open and show the default App.js landing page. We are about to erase this code and replace it to just say "Hello World!".
    Navigate to App.js and click on it. It should look like the image below.

    </p>
    <img src={HWImg10} className='hw-img-10' alt='Hello World!' />
</section>

<section>
    <p>
    Erase everything between &#60;div className="App"&#62; and the last &#60;/div&#62;
        <br />

            <img src={HWImg5} className='hw-img-5' alt='Hello World!' />
        <br />
    </p>
    <p>
        Type "Hello World!" between the two divs and click Save All.
        <br />
            <img src={HWImg9} className='hw-img-9' alt='Hello World!' />
    </p>
</section>

<section>
    <p>
    Now go back to your browser and see what it did. It should say Hello World! And you have just written your first React Component. https://github.com/philhaynes337/Hello-World
    </p>
    <img src={HWImg6} className='hw-img-6' alt='Hello World!' />
</section>
            </div>
        )
    }

}

export default HelloWorld;