import Formula from './Form';

function Education() {

 
    let content =
        <div className="education" >
            <div className="title">Education</div>
            {/* <select className='chooseLength'>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>12 Months</option>

            </select>

            <h2>Make a donation for chosen months of education</h2>
            <Formula/>

            </select> */}
             <img className="imgEduc" src="https://i.gremicdn.pl/image/free/af5c10cffea0aa04f6e7d5a4366850e0/?t=resize:fill:408:255,enlarge:1" width="350" alt=""></img>
             <div className="description">We believe in power of modern education, interesting school aids, thematic activities - help us make learning an exciting adventure</div>
            <button className="educationButton" onClick={() => handleClick()}>{buttonText}</button>

        </div>;

    return content;
}

export default Education;

