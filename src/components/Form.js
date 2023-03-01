import { useState, useEffect, useRef } from 'react';

function Form() {
  const DIV = `<div class="sheath">
  <h1>Make a Donation</h1>
  <form>
    <div class="form-group">
      <label for="name">Name/Surname:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="donation">Donation Amount:</label>
      <div class="radio-group">
        <input type="radio" id="donation10" name="donation" value="10" required>
        <label for="donation10">$10</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="donation25" name="donation" value="25" required>
        <label for="donation25">$25</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="donation50" name="donation" value="50" required>
        <label for="donation50">$50</label>
      </div>
    </div>
    <input type="submit" value="Submit" id="submit">
  </form>
</div>`;

  const [content, setContent] = useState('Click me!');
  const [displayInputs, setDisplayInputs] = useState(false);
  const sheathRef = useRef(null);

  const handleClick = () => {
    setDisplayInputs(true);
    setContent(DIV);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    setDisplayInputs(false);
    setContent('Click me!');
    console.log('thank you');
  };

  const handleOutsideClick = (event) => {
    if (sheathRef.current && !sheathRef.current.contains(event.target)) {
      setDisplayInputs(false);
      setContent('Click me!');
    }
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
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </form>
        </div>
      ) : (
        <div onClick={handleClick}>
          <button>{content}</button>
        </div>
      )}
    </div>
  );
}

export default Form;
