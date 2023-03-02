import './App.css';
import "./components/ChildrenHolEduc.css";
import {useState} from "react";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import HowToHelp from './components/HowToHelp';
import Form from './components/Form';
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
        if (visibility.aboutUs) {
            setVisibility({...nothing, home: true})
        } else {
            setVisibility({...nothing, aboutUs: true})
        }
    }

    function handleClickOnContact() {
        if (visibility.contact) {
            setVisibility({...nothing, home: true})
        } else {
            setVisibility({...nothing, contact: true, modal: true})
        }
    }


    function handleClickOnHelp() {
        if (visibility.help) {
            setVisibility({...nothing, home: true})
        } else {
            setVisibility({...nothing, help: true})
        }
    }

    const handleClickOnChildren = () => setVisibility({...nothing, children: !visibility.children});

    return (

        <div className="app">
            <div className="nav">
                <button onClick={handleClickOnAboutUs}>About us</button>
                <button onClick={handleClickOnHelp}>How to help?</button>
                <button onClick={handleClickOnContact}>Contact</button>
            </div>
            <Form/>
            <PureModal
                className='modal-window'
                width='730px'
                header="Contact Us"
                isOpen={visibility.modal}
                closeButton="close"
                closeButtonPosition="bottom"
                onClose={() => {
                    setVisibility({...nothing, modal: false, home: true})
                    return true;
                }}
            >
                <div className='contact'>{visibility.contact && <Contact/>}</div>
            </PureModal>
            {visibility.home && <Welcome title={title} shortDesc={shortDesc}/>}
            {visibility.aboutUs && <AboutUs/>}
            {visibility.help && <HowToHelp handleClickOnChildren={handleClickOnChildren}/>}
            {visibility.children && <ChildrenCard/>}
        </div>
    );
}

export default App;

