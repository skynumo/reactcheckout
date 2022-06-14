import React, { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/el";
import en from "date-fns/locale/en-IN";
import "./DatePickerField.scss";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("el", el);
registerLocale("en", en);

const DatePickerField = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  let selectedValue = null;
  if(props.defaultValue && props.defaultValue === 'today') {
     selectedValue = startDate;
  } else if(props.defaultValue && props.defaultValue !== 'today') {
    selectedValue = props.defaultValue;
  }  

  const handleOnChange = (e) => {
    setStartDate(e)
    props.onChange  && props.onChange(e)
  }

  return (
    <div className={props.classes ? props.classes : "mb-3"}>

      { props.label && (<label htmlFor={props.label}>{props.label}
      {
        props.required && <span className="text-danger"> *</span>
      }
      </label>)}
      <DatePicker
        name = {props.name ? props.name : ''}
        dateFormat={props.dateFormat ? props.dateFormat : "dd-MM-yyyy"}
        locale={props.language === "en" ? "en" : "el"}
        maxDate={props.maxDate ? props.maxDate : new Date("31-12-2022")}
        minDate={props.minDate ? props.minDate : new Date("01-01-2022")}
        selected={selectedValue}
        placeholder={props.placeholder ? props.placeholder : 'Choose a date'}
        readOnly = {props.readOnly}
        autoComplete = "off"                         
        onChange={(e) => handleOnChange(e)}
        className="form-control"
      />
      
    </div>
  );
};

export default DatePickerField;
