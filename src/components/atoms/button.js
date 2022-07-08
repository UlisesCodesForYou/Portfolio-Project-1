import {useState} from 'react'

import classes from "./button.module.css";

const Button = (props) => {
const [colorChange, setColoChange] = useState(false)

  const changeButtonHandler = () => {
setColoChange(true)
    console.log("you clicked the button!");
  };

  return (
    <div>
      <button onClick={changeButtonHandler} className={classes.button}>
        Press here to change the color!!
      </button>
    </div>
  );
};

export default Button;
