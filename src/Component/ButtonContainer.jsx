import style from "../ButtonContainer.module.css";
const ButtonContainer = ({ btnClicked }) => {
  const button = [
    "c",
    "1 ",
    "2",
    "+ ",
    "3 ",
    "4 ",
    "- ",
    "5 ",
    "6 ",
    " *",
    "7 ",
    "8 ",
    " /",
    " =",
    " 9",
    " 0",
    ". ",
  ];
  return (
    <div className={style.ButtonGroup}>
      {button.map((buttons, index) => (
        <button
          key={index}
          className={style.button}
          onClick={() => btnClicked(buttons)}
        >
          {buttons}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
