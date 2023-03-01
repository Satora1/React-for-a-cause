import {useState} from 'react';

function Contact() {
    const [messageStatus, setMessageStatus] = useState("");
    const [contactForm, setContactForm] = useState({
        title: "",
        email: "", 
        message: "",
        firstName: "",
        lastName: ""
    });
    function assignInputValueToMessage(input) {
        contactForm[input.name] = input.value;
        setContactForm(contactForm);
    }
    const sendMessage = () => {
        if (contactForm.message.length > 10) {
            setMessageStatus("Message sent!");
            console.log(contactForm);
            setContactForm({
                title: "",
                email: "", 
                message: "",
                firstName: "",
                lastName: ""
            })
        } else {
            setMessageStatus("Your message must contain at least 10 characters!")
        }
    }

    let content =
        <p className="contact_text">
            First name: <input name="firstName" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Last name: <input name="lastName" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Email: <input name="email" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Title: <input name="title"onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            Message: <input name="message" onChange={e => assignInputValueToMessage(e.target)}></input><br></br>
            <button onClick={sendMessage}>Send message</button><br></br>
            {messageStatus}
        </p>

    return content; 
}

export default Contact;