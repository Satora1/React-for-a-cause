import Formula from './Form';

function Education() {

 
    let content =
        <div className="education" >
            <h1>Education</h1>
            <select className='chooseLength'>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>12 Months</option>
            </select>

            <h2>Make a donation for chosen months of education</h2>
            <Formula/>
        </div>;

    return content;
}

export default Education;