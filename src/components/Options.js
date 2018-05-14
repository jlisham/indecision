import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <ul>
      {props.options.length === 0 && <li>no options yet - add the first!</li>}
      {props.options &&
        props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            delOneOption={props.delOneOption}
          />
        ))}
    </ul>
    {props.options.length > 0 && (
      <button onClick={props.delOptions}>clear options</button>
    )}
  </div>
);

export default Options;
