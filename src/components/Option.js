import React from "react";

const Option = props => (
  <p className="option">
    {props.count}. {props.optionText}{" "}
    <button
      className="button button--link header-subtitle"
      onClick={e => {
        props.delOneOption(props.optionText);
      }}
    >
      &nbsp;remove
    </button>
  </p>
);

export default Option;
