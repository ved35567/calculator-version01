import style from "../Display.module.css";
const Display = ({ content }) => {
  return (
    <input
      className={style.DisplayScreen}
      placeholder="Enter a number"
      type="text"
      value={content}
      readOnly
    />
  );
};
export default Display;
