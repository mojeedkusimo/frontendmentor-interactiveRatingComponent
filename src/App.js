import icon from "./images/icon-star.svg";
import { useState, useEffect } from "react"

function App() {

  const [numbers, setNumbers] = useState("");
  const numberList = () => {
    const numberFormat = [1,2,3,4,5].map((el) => {
      <span className="p-4 number" id={el} onClick={() => {handleClick(el)}}>{el}</span>
    });
  
    setNumbers(numberFormat);
  }

  const handleClick = (el) => {
    alert(el);
  }
  
  useEffect(() => {
    numberList();

  },0);

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="mt-5 App p-5">
          <img src={icon} alt="star icon" className="icon-star p-3 my-4" />
          <h1 className="h1">  How did we do?</h1>
          <p className="content">  Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
          <div className="number-container my-5">
              {numbers}
          </div>
          <div className="button-container p-3">
            <span>SUBMIT</span>
          </div>
        </div>
      </div>

      <div className="col-4"></div>
    </div>
  );
}

export default App;
