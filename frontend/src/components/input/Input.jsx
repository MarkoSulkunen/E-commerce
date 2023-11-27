import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className="input-group">
    <input ref={ref} className="input" required autoComplete="off" placeholder={props.placeholder} type={props.type} id={props.id}></input>
    <label className="label" htmlFor={props.id}>{props.label}</label>
  </div>
  );
});

export default Input;