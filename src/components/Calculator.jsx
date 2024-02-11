import { useState } from 'react';
import './Calculator-style.css'



const Calculator = () => {

  const [equalPressed, setEqualPressed] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (equalPressed) {
      setInputValue('');
      setEqualPressed(false);
    }
    setInputValue((prevValue) => prevValue + value);
  };

  const handleEqualClick = () => {
    setEqualPressed(true);
    try {
      let solution = eval(inputValue);
      setInputValue(Number.isInteger(solution) ? solution : solution.toFixed(2));
    } catch (error) {
      alert('Invalid Input');
    }
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleEraseClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };
 
 
  return (
    <>
      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input type="text" name="display" id="input" value={inputValue} />
            </div>
            <div>
              <input type="button" defaultValue="AC" id="clear" onClick={handleClearClick} />
              <input type="button" defaultValue="DE" id="erase" onClick={handleEraseClick} />
              <input type="button" defaultValue="." className="input-button" onClick={() => handleButtonClick(".")} />
              <input type="button" defaultValue="/" className="input-button" onClick={() => handleButtonClick("/")} />
            </div>
            <div>
              <input type="button" defaultValue={7} className="input-button" onClick={() => handleButtonClick("7")} />
              <input type="button" defaultValue={8} className="input-button" onClick={() => handleButtonClick("8")} />
              <input type="button" defaultValue={9} className="input-button" onClick={() => handleButtonClick("9")} />
              <input type="button" defaultValue="*" className="input-button" onClick={() => handleButtonClick("*")} />
            </div>
            <div>
              <input type="button" defaultValue={4} className="input-button" onClick={() => handleButtonClick("4")} />
              <input type="button" defaultValue={5} className="input-button" onClick={() => handleButtonClick("5")} />
              <input type="button" defaultValue={6} className="input-button" onClick={() => handleButtonClick("6")} />
              <input type="button" defaultValue="-" className="input-button" onClick={() => handleButtonClick("-")} />
            </div>
            <div>
              <input type="button" defaultValue={1} className="input-button" onClick={() => handleButtonClick("1")} />
              <input type="button" defaultValue={2} className="input-button" onClick={() => handleButtonClick("2")} />
              <input type="button" defaultValue={3} className="input-button" onClick={() => handleButtonClick("3")} />
              <input type="button" defaultValue="+" className="input-button" onClick={() => handleButtonClick("+")} />
            </div>
            <div>
              <input type="button" defaultValue={'00'} className="input-button" onClick={() => handleButtonClick("00")} />
              <input type="button" defaultValue={0} className="input-button" onClick={() => handleButtonClick("0")}/>
              <input type="button" defaultValue="=" id="equal" onClick={handleEqualClick}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Calculator