import React from "react";

const InputField = ({
  type,
  id,
  required,
  placeholder,
  label,
  hideLabel,
  maxChartLimit,
  onChange,
  className,
  name,
  value,
  onKeyDown,
  disabled,
  autoComplete,
  // defaultValue,
}) => {

  // Default Max Limit for Input is 100 char
  let maxLength = maxChartLimit ? maxChartLimit : 100;

  return (
    <React.Fragment>
      <div className={className ? className : "w-100 mb-3"}>
        {label && (
          <label htmlFor={id}>
            {label}
            {required && <span className="text-danger"> *</span>}
          </label>
        )}
        <input
          maxLength={maxLength}
          className="form-control"
          type={type ? type : 'text'}
          disabled = {disabled}
          name={name}
          id={id}
          defaultValue = {value ? value : ''}
          // defaultValue = {defaultValue}
          onChange={onChange}
          autoComplete= {autoComplete ? autoComplete : 'off'}
          onKeyDown={onKeyDown}
          placeholder={placeholder ? placeholder : ''}
        />
        {value !==undefined && value !== "" && (value.length == maxLength) && <small className="text-info">Max length reached.</small>} 
      </div>
    </React.Fragment>
  );
};

export default InputField;
