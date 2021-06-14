import React, { Component } from 'react';
import Node1Img from './images/node1.PNG';
import Cmd1Img from './images/cmd1.PNG';
import Create1 from './images/create1.PNG';
import Create2 from './images/create2.PNG';
import Create3 from './images/create3.PNG';
import Create4 from './images/create4.PNG';
import Create5 from './images/create5.PNG';
import './ReactStart.css';

class ReactStart extends Component {

    render() {

        return(
            <div className='rs-1'>
                <h1>Starting with React</h1>

                <section>
                    <h2>Essentials</h2>

                    <p>
                        To get started you will need to download Node.js. After Node.js has been installed then we will go over the CMD Prompt commands.
                    </p>

                    <li>Node.js | <a href='https://nodejs.org/en/download/'>Download Here</a></li>
                    <li>Command Prompt</li>
                    <li>React Environment</li>
                    <li>NPM (Node Package Manager)</li>
                </section>

                <section>
                    <h2>Install Node.js</h2>

                    Follow the link for your download. Follow the promps for the install.
                    <br />
                    <img src={Node1Img} className='node-img' alt='Node Install' />
                </section>

                <section>
                    <h2>Command Prompt</h2>
                    
                    Open the Command Prompt on your computer. Change to a directory where you want to save your ReactJS project.
                    <br />
                        <img src={Cmd1Img} className='cmd-img' alt='Command Prompt' />
                    <br />

                    <h3>Basic Windows Commands</h3>
                        <div className='row-rs'>
                            <div className='col-rs cmd-1'>
                                CD 
                            </div>
                            <div className='col-rs cmd-2'>
                                Change Directory. Example: CD My Documents
                            </div>
                        </div>
                        <div className='row-rs'>
                            <div className='col-rs cmd-1'>
                                CD..
                            </div>
                            <div className='col-rs cmd-2'>
                                Change Directory Up Level or "back" a folder.
                            </div>
                        </div>
                        <div className='row-rs'>
                            <div className='col-rs cmd-1'>
                                MKDIR
                            </div>
                            <div className='col-rs cmd-2'>
                                Create a Directory. Example: MKDIR ReactApps
                            </div>
                        </div>
                        <div className='row-rs'>
                            <div className='col-rs cmd-1'>
                                DIR
                            </div>
                            <div className='col-rs cmd-2'>
                                List of all directory's in the current director.
                            </div>
                        </div>

                </section>
                <section>
                    <h2>Create React App</h2>

                    Now it is time to create your first ReactJS app. In the Command Prompt change into the directory you want to save your app in. When you type in the command to create React environment it will create a directory with that name. This is a good thing to have in mind.
                    <br />
                    <p>
                    In the Command Prompt type: 
                    <br />
                    <b>npm i -g create-react-app.</b>
                    <br />
                    this will install create-react-app globally so you do not have to
                    install it again
                    </p>
                    <br />
                    <img src={Create1} className='create-img-1' alt='Installing React' />
                    <br />
                    <p>
                    Now its time to create the React App!
                    <br />
                    Type: 
                    <br />
                    <b>npx create-react-app nameofyourapp</b>
                    <br />
                    </p>
                    <p>
                        This will take a minute or two, however, your command prompt should look
                        like the images below.
                        <br />
                        <img src={Create2}className='create-img-2' alt='Installing React' />
                    </p>
                    <p>
                        <img src={Create3}className='create-img-3' alt='Installing React' />
                    </p>
                    <p>
                        After React environment for your app is complete you will need to
                        change into that directory it just created.
                        <br />
                        Type:
                        <br />
                        <b>CD nameofyourapp</b>
                        <br />
                        <img src={Create4}className='create-img-4' alt='Installing React' />
                    </p>
                    <p>
                        Now that you are in the working React directory of your app you can 
                        open the default React App.js.
                        <br />
                        Type:
                        <br />
                        <b>npm run start</b>
                        <img src={Create5}className='create-img-5' alt='Installing React' />
                    </p>
                    <p>
                        <h2>Congrats!</h2>

                        You have just installed and have React up and running!
                    </p>
                </section>
            </div>
        )
    }
}

export default ReactStart