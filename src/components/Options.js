import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>

      <button
        disabled={props.options.length === 0}
        className="button button--link"
        onClick={props.delOptions}
      >
        clear options
      </button>
    </div>
    <div className="widget-content">
      {props.options.length === 0 && <em>no options yet - add the first!</em>}
      {props.options &&
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            delOneOption={props.delOneOption}
          />
        ))}
    </div>
  </div>
);

export default Options;
