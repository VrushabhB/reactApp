import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

import "./input.css";

function InputFeild({ placeholder, type, name, value, handleOnChange }) {
  return (
    <Input
      className="input-feild"
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      onChange={handleOnChange}
    />
  );
}

InputFeild.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default InputFeild;
