import React, { Component } from 'react';
import emailjs from 'emailjs-com'
import Config from '../Config';


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
                <form onSubmit={this.handleSubmit}>
                    Name:
                    <input type='text' name='name' id='name' defaultValue='Full Name' required />
                    E-Mail:
                    <input type='text' name='email' id='email' defaultValue='Example@example.com' required />
                    Message:
                    <input type='text' name='message' id='message' defaultValue='Your Message Here' required />
                    <br />
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        )
    }
}

export default Contact;