import { useState, useEffect, useRef} from 'react';

function Form() {
  const DIV = `<h1><div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="surname">Surname:</label>
    <input type="text" id="surname" name="surname">
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </div></h1>

  <button class="Send">
 Send
  </button>
  `;

  const [content, setContent] = useState('Click me!');
  const [displayInputs, setDisplayInputs] = useState(false);
  const sheathRef = useRef(null);


  const handleClick = () => {
    setDisplayInputs(true);
    setContent(DIV);

  };

  
  const handleOutsideClick = (event) => {
    if (sheathRef.current && !sheathRef.current.contains(event.target)) {
      setDisplayInputs(false);
      setContent('Click me!');
    }
  };




  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  
  return (
    <div>
      {displayInputs ? (
        <div ref={sheathRef} className="sheath">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
