import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const CurrencyField = ({ label, id, required, focused, suffix, maxLength, decimalLimit, conversion, defaultValue, onChange, onBlur, onKeyDown, disabled }) => {

  const [focusedInput, setFocusedInput] = useState(focused);
  const [autoFocusInput, setAutoFocusInput] = useState(false);

  let decimalScaleValue = 2;

  let newDval = 0

  if (Number.isInteger(defaultValue)) {
    newDval = defaultValue;
  } else {
    if (defaultValue !== undefined && defaultValue !== 'undefined' && defaultValue !== '' && defaultValue !== null && defaultValue !== 'null') {
      newDval = defaultValue.toString().replace(/[^\d.]/gi, "");
    }
  }

  // Count the number of decimals places
  let newValStr = newDval.toString();
  if (newValStr.includes(".")) {
    let newDValArr = newDval.split('.');
    decimalScaleValue = newDValArr['1'].length ? newDValArr['1'].length : 0;
  }

  let defaultvalue = newDval ? newDval : 0;

  const [enteredInput, setEnteredInput] = useState(defaultvalue);

  const handleEnteredValue = (e) => {
    let value = e.target.value.trim();

    if (maxLength && (value.length > maxLength)) {
      e.target.value = enteredInput;
    } else {
      value = value.replace(/,/g, "."); // decimal
      value = value.replace(/[^\d.]/gi, "");
      setEnteredInput(value);
    }

    onChange && onChange(e); // set value to parent
    setAutoFocusInput(false)
  }

  const handleOnBlur = (e) => {
    setFocusedInput(!focusedInput)
    onBlur && onBlur(e); // set value to parent
  }

  const handleOnFocus = (e) => {
    e.target.select();
  }

  const handleOnFocus2 = (e) => {
    setFocusedInput(!focusedInput)
    setAutoFocusInput(true)
  }

  let newSuffix = "€";

  if (suffix && suffix === "nosuffix") {
    newSuffix = "";
  } else if (suffix && suffix !== "nosuffix") {
    newSuffix = suffix;
  }

  return (
    <React.Fragment>
      <div className="form-group currency-field mb-3">

        {label && (
          <label htmlFor={id}>
            {label}
            {required && <span className="text-danger"> *</span>}
          </label>
        )}

        {focusedInput && (
          <CurrencyInput
            groupSeparator={`${conversion ? "," : "."}`}
            decimalSeparator={`${conversion ? "." : ","}`}
            decimalsLimit={decimalLimit}
            decimalScale={decimalScaleValue}
            maxLength={maxLength}
            value={enteredInput}
            defaultValue={defaultvalue}
            suffix={newSuffix}
            className="form-control"
            onFocus={(e) => handleOnFocus2(e)}
            onKeyDown={onKeyDown}
            disabled={disabled}
          />
        )}

        {!focusedInput && (
          <CurrencyInput
            decimalsLimit={decimalLimit}
            maxLength={2}
            className="form-control"
            value={enteredInput}
            onBlur={(e) => handleOnBlur(e)}
            onChange={(e) => handleEnteredValue(e)}
            onFocus={(e) => handleOnFocus(e)}
            onKeyDown={onKeyDown}
            allowDecimals
            disableGroupSeparators
            {...(autoFocusInput && { autoFocus: true })}
            disabled={disabled}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default CurrencyField;