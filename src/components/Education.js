import { useState } from 'react';

function Education() {

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
        <div className="education" >
            <h1>Education</h1>
            <select className='chooseLength'>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>12 Months</option>
            </select>
            <h2>Make a donation for chosen months of education</h2>
            <button className='educationButton' onClick={() => handleClick()}>{buttonText}</button>
        </div>;

    return content;
}

export default Education;