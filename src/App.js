import icon from "./images/icon-star.svg";
import { useState, useEffect } from "react";

function App() {

  const [numbers, setNumbers] = useState("");
  const [clickedNum, setClickedNum] = useState(null);

  const numberList = () => {
    const numberFormat = [1,2,3,4,5].map((el) => {
      return <span className="p-4 number" id={`el${el}`} key={el} onClick={() => {handleClick(el)}}>{el}</span>
    });
  
    setNumbers(numberFormat);
  }

  const handleClick = (el) => {
    const choosenNum = document.querySelector(`#el${el}`);
    let numberArray = document.querySelectorAll(".number");
    // choosenNum.style.backgroundColor = "grey";
    // choosenNum.style.color = "white";

    for (let i = 1; i < numberArray.length; i++) {

      if (numberArray[i].id == `el${i}`) {
        choosenNum.classList.add("selected");
      } else {
        numberArray[i].classList.remove("selected");
      }

      console.log(numberArray[i].id);
      console.log(`el${i}`);
    }

    setClickedNum(el);
  }
  
  const handleSubmit = () => {
    alert(`You selected ${clickedNum}`);
  }

  useEffect(() => {
    numberList();

  },[]);

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
          <div className="button-container p-3" onClick={handleSubmit}>
            <span>SUBMIT</span>
          </div>
        </div>
      </div>

      <div className="col-4"></div>
    </div>
  );
}

export default App;
