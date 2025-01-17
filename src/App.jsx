import styles from "./App.module.css";
import { useState } from "react";
import Display from "./Component/Display";
import { evaluate } from "mathjs";
import ButtonContainer from "./Component/ButtonContainer";

function App() {
  const [calVal, setCalVal] = useState("");
  const Handlebtn = (buttons) => {
    console.log("Button clicked:", buttons);
    if (buttons === "c") {
      setCalVal("");
    } else if (buttons === "=") {
      const result = evaluate(calVal);
      setCalVal(result);
    } else {
      const updateVal = calVal + buttons;
      setCalVal(updateVal);
    }
  };
  return (
    <div className={styles.Calculator}>
      <Display content={calVal}></Display>
      <ButtonContainer btnClicked={Handlebtn}></ButtonContainer>
    </div>
  );
}

export default App;
