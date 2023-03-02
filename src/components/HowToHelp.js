import Holiday from'./Holiday'
import Education from'./Education'
import Form from './Form';

function HowToHelp(props) {

    let content =
    <div>
      <h1 className="help">HOW TO HELP</h1>
      <Holiday/>
      <Education/>
      </div>
  
    return content;
  
  }
  
  export default HowToHelp;