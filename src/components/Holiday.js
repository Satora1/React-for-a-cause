
import Formula from './Form';
function Holiday() {

 

    let content =
        <div className="holiday" >

            <h1>Holidays</h1>
            <h2>Make a donation to our newest survival and science camp in Krynica-Zdrój!</h2>
            <img src="https://montemlife.com/wp-content/uploads/2019/03/summercamp-1000x600.jpg" alt=""  className='kidsPic'/>
            <Formula/>

            <div className="title">Holidays</div>
            <img className="kidsPic" src="https://montemlife.com/wp-content/uploads/2019/03/summercamp-1000x600.jpg" width="350" alt="" />
            <div className="description">It's true that outdoor activity is the best way to stimulate development. Here is our newest survival and science camp in Krynica-Zdrój!</div>
            <button className='holidayButton' onClick={() => handleClick()}>{buttonText}</button>

        </div>;

    return content;
}

export default Holiday;

