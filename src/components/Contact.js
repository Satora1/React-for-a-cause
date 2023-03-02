import { useState } from 'react';

function Contact() {
    const [messageStatus, setMessageStatus] = useState("");
    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        message: "",
    });
    function assignInputValueToMessage(input) {
        contactForm[input.name] = input.value;
        setContactForm(contactForm);
    }

    function checkFormValidity(form) {
        if (form.firstName.length < 1) {
            setMessageStatus("First name can't be empty");
            return false;
        } else if (form.lastName.length < 1) {
            setMessageStatus("Last name can't be empty")
            return false;
        } else if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setMessageStatus("Enter correct email address");
            return false;
        } else if (form.title.length < 1) {
            setMessageStatus("Enter message title");
            return false;
        } else if (form.message.length < 10) {
            setMessageStatus("Message must contain at least 10 characters!");
            return false
        }
        setMessageStatus("Message sent!")
        return true
    }

    const sendMessage = () => {
        checkFormValidity(contactForm);
        console.log(contactForm);
        if (checkFormValidity(contactForm)) {
            setContactForm({
                firstName: "",
                lastName: "",
                email: "",
                title: "",
                message: "",
            });
        }
    }

    let content =
        <p className="contact-text">
            First name: <input name="firstName" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Last name: <input name="lastName" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Email: <input name="email" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Title: <input name="title" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Message: <input name="message" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            <button onClick={sendMessage}>Send message</button><br></br>
            {messageStatus}
        </p>

    return content;
}

export default Contact;