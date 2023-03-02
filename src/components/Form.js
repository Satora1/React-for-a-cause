import { useState, useEffect, useRef } from 'react';


function Formula() {
  const DIV = (<div class="sheath">
  <h1>Make a Donation</h1>
  <form>
    <div class="form-group">
      <label for="name">Name/Surname:</label>
      <input type="text" id="name" name="name" required/>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="donation">Donation Amount:</label>
      <div class="radio-group">
        <input type="radio" id="donation10" name="donation" value="10" required/>
        <label for="donation10">$10</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="donation25" name="donation" value="25" required/>
        <label for="donation25">$25</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="donation50" name="donation" value="50" required/>
        <label for="donation50">$50</label>
      </div>
    </div>
    <input type="submit" value="Submit" id="submit"/>
  </form>
</div>)

  const [setContent] = useState('Donate');
  const [displayInputs, setDisplayInputs] = useState(false);
  const sheathRef = useRef(null);

  const handleClick = (event) => {
    if (event.target.id === 'donateButton'||event.target.id === 'otherButton') {
      setDisplayInputs(true);
      setContent(DIV);
    }
  };

  const handleOutsideClick = (event) => {
    if (!sheathRef.current.contains(event.target)) {
      setDisplayInputs(false);
      setContent('Donate');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      {displayInputs ? (
        <div ref={sheathRef} className="sheath">
          <form onSubmit={handleSubmit}>
            <div>{DIV}</div>
          </form>
        </div>
        
      ) : (
        <div onClick={handleClick}>
          <button id='otherButton' className='button2'>Donate</button>
        </div>
      )}
    </div>
  );
}

export default Formula;
