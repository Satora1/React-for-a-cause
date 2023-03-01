import './App.css';

import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';

import HowToHelp from './components/HowToHelp';

import { useState } from 'react';
import Contact from './components/Contact';



function App() {
  const title = "Future belongs to us!"
  const shortDesc = "You have the power, you have the influence - help us make the future brighter"
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
      {homeIsShown && <Welcome title={title} shortDesc={shortDesc} />}
      {aboutUsIsShown && <AboutUs></AboutUs>}
      {contactIsShown && <Contact></Contact>}
      {helpIsShown && <HowToHelp></HowToHelp>}
    </div>
  );
}

export default App;
