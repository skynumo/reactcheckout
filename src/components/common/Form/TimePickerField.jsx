import React, { useEffect, useState } from "react";
import * as moment from "moment";
import "./CustomTimePickerField.scss";

const currentTime = moment().format('H:mm');

const TimePickerField = ({
  id,
  required,
  label,
  onChange,
  className,
  name,
  value,
  disabled,
  hideValidation,
  invalidMessage,
}) => {


  const [isValidTime, setIsValidTime] = useState(true);

  useEffect(() => {
    if (value) {
      let valid = moment(value, "H:mm", true).isValid();
      setIsValidTime(valid)
    }
  }, [value])
  
  const onKeyDown = (e) => {
    let timeStr = e.target.value.trim();

    if (timeStr?.length === 2 && e.keyCode !== 8) {

      // If greater than 23 then replace with 23
      if (parseInt(timeStr) > 23) {
        timeStr = "23";
      }

      // Add columns after 2 digits
      timeStr += ":";
    } 

    e.target.value = timeStr;
  }

  const onChangeTime = (e) => {
    let valid = false;
    let timeStr = e.target.value.trim();

    if (timeStr?.length >= 4 && e.keyCode !== 8) {
      let timeArr = timeStr.split(':');
      
      if (timeArr['1'] !== '' && parseInt(timeArr['1']) > 59) {
        timeArr['1'] = "59";
      }
      timeStr = timeArr['0'] + ":" + timeArr['1'];
      e.target.value = timeStr;
    }

    valid = moment(timeStr, "H:mm", true).isValid();
    setIsValidTime(valid);

    onChange && onChange(e); // pass to parent
  }

  const selectOnClick = (e) => {
    e.target.select();
  }

  return (
    <React.Fragment>
      <div className={className ? className : "w-100 custom-time-picker"}>
        {label && label !== "" && (
          <label htmlFor={id}>
            {label}
            {required && <span className="text-danger"> *</span>}
          </label>
        )}
        <input
          maxLength={5}
          className="form-control"
          type='text'
          disabled = {disabled}
          name={name}
          // value = {value ? value : currentTime}
          defaultValue = {value ? value : currentTime}
          onChange={(e) => onChangeTime(e)}
          onKeyDown={(e) => onKeyDown(e)}
          onClick={(e) => selectOnClick(e)}
          autoComplete = "off"
          pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}"
          placeholder="HH:MM"
        />
        {!hideValidation && !isValidTime && <div className="text-danger">
          {invalidMessage} 
          {!invalidMessage && "Invalid 24 hour time format. eg." + currentTime} 
        </div>}
      </div>
    </React.Fragment>
  );
};

export default TimePickerField;
