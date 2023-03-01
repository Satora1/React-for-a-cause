
import Form from './component/Form';

import './App.css';
import { useState } from "react";
import Contact from './components/Contact';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import HowToHelp from './components/HowToHelp';




function App() {

  const shortDesc = "You have the power, you have the influence - help us make the future brighter"
  const title = "Future belongs to us!"
  const [modal, setModal] = useState(false);
  const [aboutUsIsShown, SetAboutUsVisibility] = useState(false);
  const [contactIsShown, SetContactVisibility] = useState(false);
  const [homeIsShown, SetHomeVisibility] = useState(true);
  const [helpIsShown, SetHelpVisibility] = useState(false);

  function handleClickOnAboutUs() {
    if (aboutUsIsShown) {
      SetAboutUsVisibility(false)
      SetHomeVisibility(true)
    }
    else {
      SetAboutUsVisibility(true)
      SetHomeVisibility(false)
      SetContactVisibility(false)
      SetHelpVisibility(false)
    }
  }

  function handleClickOnContact() {
    if (contactIsShown) {
      SetContactVisibility(false)
      SetHomeVisibility(true)
    }
    else {
      SetContactVisibility(true)
      SetHomeVisibility(false)
      SetAboutUsVisibility(false)
      SetHelpVisibility(false)
      setModal(true)
    }
  }

  function handleClickOnHelp() {
    if (helpIsShown) {
      SetHelpVisibility(false)
      SetHomeVisibility(true)
    }
    else {
      SetHelpVisibility(true)
      SetContactVisibility(false)
      SetHomeVisibility(false)
      SetAboutUsVisibility(false)
    }
  }

  return (

    <div className="app">
      <div className="nav">
        <button onClick={handleClickOnAboutUs}>About us</button>
        <button onClick={handleClickOnHelp} >How to help?</button>
        <button onClick={handleClickOnContact} >Contact</button>
      </div>
      <PureModal
          className='modal-window'
          width='730px'
          header="Contact Us"
          isOpen={modal}
          closeButton="close"
          closeButtonPosition="bottom"
          onClose={() => {
            setModal(false);
            SetHomeVisibility(true)
            return true;
          }}
        >
          <div className='contact'>{contactIsShown && <Contact></Contact>}</div>
        </PureModal>
      {homeIsShown && <Welcome title={title} shortDesc={shortDesc} />}
      {aboutUsIsShown && <AboutUs></AboutUs>}
      {helpIsShown && <HowToHelp></HowToHelp>}

    </div>


  );
}


export default App;
