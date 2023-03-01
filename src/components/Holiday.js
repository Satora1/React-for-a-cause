import { useState } from 'react';

function Holiday() {

    function handleClick() {
        if (buttonText === "Donate") {
            setButtonText('Go back');
        } else {
            setButtonText("Donate")
        }
    }

    const initialState = "Donate";
    const [buttonText, setButtonText] = useState(initialState);
    let content =
        <div className="holiday" >
            <h1>Holidays</h1>
            <h2>Make a donation to our newest survival and science camp in Krynica-Zdrój!</h2>
            <img src="https://montemlife.com/wp-content/uploads/2019/03/summercamp-1000x600.jpg" alt=""  className='kidsPic'/>
            <button className='holidayButton' onClick={() => handleClick()}>{buttonText}</button>
        </div>;

    return content;
}

export default Holiday;