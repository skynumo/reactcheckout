import React, { useState } from "react";
import { isValidEmail } from "../../../_utils/Utils";

const EmailField = ({
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

  const [emailError, setEmailError] = useState(false);

  const handleOnChange = (e) => {

    const { value } = e.target;
    let validCheck = false;

    // Check for valid email
    if (value !== '' && !isValidEmail(value)) {
      validCheck = true;
    }

    setEmailError(validCheck);

    onChange && onChange(e);
  }

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
          type='email'
          disabled={disabled}
          name={name}
          id={id}
          defaultValue={value ? value : ''}
          // defaultValue = {defaultValue}
          onChange={(e) => handleOnChange(e)}
          autoComplete={autoComplete ? autoComplete : 'off'}
          onKeyDown={onKeyDown}
          placeholder={placeholder ? placeholder : ''}
        />
        {emailError && <div className="text-danger">Invalid Email Address.</div>}
      </div>
    </React.Fragment>
  );
};

export default EmailField;
