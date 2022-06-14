import React from "react";

const TextAreaField = (props) => {

  const {
    label, 
    rows, 
    value, 
    onChange, 
    onBlur, 
    className, 
    placeholder, 
    name,
    hideLabel,
  } = props;

  return (
    <React.Fragment>
      <div className={className ? className : 'mb-3'}>
        
        {!hideLabel && label && label !== '' && <label>{label}</label>}

        <textarea
          onChange={(e) => onChange && onChange(e)}
          onBlur={(e) => onBlur && onBlur(e)}
          className="form-control"
          placeholder={placeholder ? placeholder : ''}
          name={name}
          rows={rows ? rows : 5}
          value={value ? value : ''}
        />

      </div>
    </React.Fragment>
  );
};

export default TextAreaField;