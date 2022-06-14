import React from "react";
import "./CheckBox.scss";

const Checkbox = ({ label, id, className, name, value, onChange, defaultValue, disabled }) => {
  let classes = 'form-group';
  if (className) {
    classes = className;
  }

  const inputName = name ? name : 'checkbox-name';
  const inputChecked = (defaultValue === 'true' || defaultValue === 'active' || defaultValue === true || defaultValue === 'yes' || defaultValue === 1) ? true : false;

  return (
    <div className={classes}>
      <label className="css-control css-checkbox" htmlFor={id}>
        { inputChecked ? 
          <input
            disabled = {disabled}
            type="checkbox"
            className="css-control-input mr-2"
            id={id}
            checked={true}
            name={inputName}
            value={value}
            onChange={onChange}
          />
        : 
          <input
            disabled = {disabled}
            type="checkbox"
            className="css-control-input mr-2"
            id={id}
            name={inputName}
            value={value}
            onChange={onChange}
          />
        }
        <span className="normal-text">{label}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
