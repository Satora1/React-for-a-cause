
import Holiday from './Holiday'
import Education from './Education'
import Children from './Children';


function HowToHelp({handleClickOnChildren}) {

    return <div className="donationCards">
        <Education/>
        <Children handleClickOnChildren={handleClickOnChildren}/>
        <Holiday/>
    </div>;
  
  }
  
  export default HowToHelp