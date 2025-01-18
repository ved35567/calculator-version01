// import styles from "./App.module.css";
// import { useState } from "react";
// import Display from "./Component/Display";
// import { evaluate } from "mathjs";
// import ButtonContainer from "./Component/ButtonContainer";

// function App() {
//   const [calVal, setCalVal] = useState("");
//   const Handlebtn = (buttons) => {
//     console.log("Button clicked:", buttons);
//     if (buttons === "c") {
//       setCalVal("");
//     } else if (buttons === "=") {
//       const result = evaluate(calVal);
//       setCalVal(result);
//     } else {
//       const updateVal = calVal + buttons;
//       setCalVal(updateVal);
//     }
//   };
//   return (
//     <div className={styles.Calculator}>
//       <Display content={calVal}></Display>
//       <ButtonContainer btnClicked={Handlebtn}></ButtonContainer>
//     </div>
//   );
// }

// export default App;



import styles from "./App.module.css";
import { useState } from "react";
import Display from "./Component/Display";
import ButtonContainer from "./Component/ButtonContainer";

import { evaluate } from "mathjs"; // Ensure proper input sanitization to avoid potential security issues.

function App() {
  const [calVal, setCalVal] = useState("");

 const handleButtonClick = (button) => {
  if (button === "c") {
    setCalVal("");
  } else if (button === "=") {
    try {
      const result = evaluate(calVal);
      setCalVal(result.toString()); // Set the result for display
    } catch (error) {
      setCalVal("Error");
    }
  } else {
    // Update the value without adding "=" to the expression
    setCalVal((prevVal) => prevVal + button);
  }
};


  return (
    <div className={styles.Calculator}>
      <Display content={calVal} />
      <ButtonContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;

// ButtonContainer Component
import style from "../ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttons = [
    "c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."
  ];

  return (
    <div className={style.ButtonGroup}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={style.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;

// Display Component
import style from "../Display.module.css";

const Display = ({ content }) => (
  <input
    className={style.DisplayScreen}
    placeholder="Enter a number"
    type="text"
    value={content}
    readOnly
  />
);

export default Display;

