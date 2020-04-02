import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

import "./input.css";

function InputFeild({ placeholder, type, name, value }) {
  return (
    <Input
      className="input-feild"
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
}

InputFeild.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
};

export default InputFeild;
