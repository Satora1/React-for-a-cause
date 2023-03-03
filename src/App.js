import './App.css';
import "./components/ChildrenHolEduc.css";
import { useState } from "react";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import HowToHelp from './components/HowToHelp';
import ChildrenCard from "./components/ChildrenCard";

function App() {
    const nothing = {
        home: false,
        aboutUs: false,
        contact: false,
        help: false,
        modal: false,
        children: false
    }

    const shortDesc = "You have the power, you have the influence - help us make the future brighter"
    const title = "Future belongs to us!"

    const [visibility, setVisibility] = useState({
        ...nothing,
        home: true,
    })

    function handleClickOnAboutUs() {
        if (!visibility.aboutUs) {
            setVisibility({ ...nothing, aboutUs: true })
        }
    }

    function handleClickOnContact() {
        if (!visibility.contact) {
            setVisibility({ ...nothing, contact: true, modal: true })
        }
    }

    function handleClickOnHelp() {
        if (!visibility.help) {
            setVisibility({ ...nothing, help: true })
        }
    }

    function handleClickOnMenu() {
        if (!visibility.home) {
            setVisibility({ ...nothing, home: true })
        }
    }

    const handleClickOnChildren = () => setVisibility({ ...nothing, children: !visibility.children });

    return (
        <div className="app">
            <div className="nav">
                <button className= "menu" onClick={handleClickOnMenu} >Menu</button>
                <button className= "about-button" onClick={handleClickOnAboutUs}>About us</button>
                <button className= "help-button" onClick={handleClickOnHelp}>How to help?</button>
                <button className= "contact-button" onClick={handleClickOnContact}>Contact</button>
            </div>
            <PureModal
                className="modal-window"
                width='730px'
                header="Contact Us"
                isOpen={visibility.modal}
                onClose={() => {
                    setVisibility({ ...nothing, modal: false, home: true })
                    return true;
                }}
            >
                <div className="contact">{visibility.contact && <Contact />}</div>
            </PureModal>
            {visibility.home && <Welcome title={title} shortDesc={shortDesc} />}
            {visibility.aboutUs && <AboutUs />}
            {visibility.help && <HowToHelp handleClickOnChildren={handleClickOnChildren} />}
            {visibility.children && <ChildrenCard />}
        </div>
    );
}

export default App;

