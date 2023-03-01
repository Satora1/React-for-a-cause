import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Contact from './components/contact';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setModal(true)}>Contact</button>
        <PureModal
          className='modal-window'
          width='730px'
          header="Contact Us"
          isOpen={modal}
          closeButton="close"
          closeButtonPosition="bottom"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <div className='contact'>{<Contact/>}</div>
        </PureModal>
      </header>
    </div>


  );
}

export default App;
