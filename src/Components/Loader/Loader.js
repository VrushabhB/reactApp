import React from "react";
import PropTypes from "prop-types";
import "./loader.css";
function Loader({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

Loader.propTypes = { isLoading: PropTypes.bool };

export default Loader;
