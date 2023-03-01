import {useState} from 'react';

function Contact() {
    const [getMessage, setGetMessage] = useState("");
    const [messageStatus, setMessageStatus] = useState("")
    const sendMessage = () => {
        const titleInput = document.querySelector("#title").value;
        const messageInput = document.querySelector("#message").value;
        if (messageInput.length > 10) {
            setGetMessage(`${titleInput} ${messageInput}`);
            setMessageStatus("Message sent!");
            document.querySelector("#title").value = "";
            document.querySelector("#message").value = "";
            console.log(getMessage);
        } else {
            setMessageStatus("Your message must contain at least 10 characters!")
        }
    }

    let content =
        <p className="contact_text">
            First name: <input></input><br></br>
            Last name: <input></input><br></br>
            Email: <input></input><br></br>
            Title: <input id="title"></input><br></br>
            Message: <input id="message"></input><br></br>
            <button onClick={sendMessage}>Send message</button><br></br>
            {messageStatus}
        </p>

    return content; 
}

export default Contact;