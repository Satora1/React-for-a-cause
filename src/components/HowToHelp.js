import Holiday from'./Holiday'
import Education from'./Education'
import Children from './Children';

function HowToHelp(props) {
    
    let content =
    <div className="donationCards">
      <Education/>
      <Children/>
      <Holiday/>
    </div>
  
    return content;
  
  }
  
  export default HowToHelp