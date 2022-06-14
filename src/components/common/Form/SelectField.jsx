import React from "react";
import Select from "react-select";
import './SelectField.scss';

const SelectField = (props) => {

  let className = props.className ? props.className : props.className ? props.className : 'mb-3 w-100';
  let defaultValue = props.defaultValue ? props.defaultValue : null;

  return (
    <React.Fragment>
      <div className={className}>
        {props.label &&
          <label htmlFor={props.id}>
            {props.label}
            {props.required && <span className="text-danger"> *</span>}
          </label>
        }

        {
          props.enabledValue ?
            <Select
              onClick={props.onClick}
              name={props.name ? props.name : ''}
              closeMenuOnSelect={true}
              value={props.value ? props.value : defaultValue}
              defaultValue={defaultValue}
              isMulti={props.multiSelect ? true : false}
              options={props.options}
              isSearchable={props.searchEnable ? true : false}
              id={props.id}
              onChange={props.onChange}
              isDisabled={props.disabled}
              menuPlacement={props.position ? props.position : 'bottom'}
            />
            :
            <Select
              onClick={props.onClick}
              menuPlacement={props.position ? props.position : 'bottom'}
              name={props.name ? props.name : ''}
              closeMenuOnSelect={true}
              defaultValue={defaultValue}
              isMulti={props.multiSelect ? true : false}
              options={props.options}
              isSearchable={props.searchEnable ? true : false}
              id={props.id}
              onChange={props.onChange}
              isDisabled={props.disabled}
            />
        }
      </div>
    </React.Fragment>
  );
};

export default SelectField;
