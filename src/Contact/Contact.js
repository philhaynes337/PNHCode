import React, { Component } from 'react';
import emailjs from 'emailjs-com'
import Config from '../Config';
import './Contact.css';


class Contact extends Component {

    handleSubmit = e => {
        e.preventDefault();


        //const apiToken = Config.EMAIL_ACCESS_TOKEN
        const emailTemplate = Config.EMAIL_TEMPLATE_ID
        const emailUserID = Config.EMAIL_USER_ID
        const serviceID = Config.EMAIL_SERVICE_ID

        emailjs.sendForm(serviceID, emailTemplate, e.target, emailUserID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            }
            
            )

    }

    render() {

        return(

            <div>
                <h1>
                    Contact Me
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='row-c'>
                        <div className='col-c label-c'>
                            Name:
                        </div>
                        <div className='col-c input-c'>
                            <input type='text' name='name' id='name' defaultValue='Full Name' required />
                        </div>
                    </div>
                    <div className='row-c'>
                        <div className='col-c label-c'>
                            E-Mail:
                        </div>
                        <div className='col-c input-c'>
                            <input type='text' name='email' id='email' defaultValue='Example@example.com' required />
                        </div>
                    </div>
                    <div className='row-c '>
                        <div className='col-c label-c'>
                            Message:
                        </div>
                        <div className='col-c input-c'>
                            <textarea name='message' id='message' defaultValue='Your message here.' required />
                        </div>
                    </div>
                
                    <div className='row-c'>
                        <div className='col-c label-c'>

                        </div>
                        <div className='col-c input-c'>
                            <button type='submit'>Send Message</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Contact;